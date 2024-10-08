import express from 'express';
import connectToMongo from './features/shared/utils/db.js';
import authRoute from './features/auth/routes/authRoutes.js';
import authorizeUser from './features/shared/middleware/authMiddleware.js';
import { Server } from 'socket.io';
import { createServer } from "http";
import env from 'dotenv'
import activityRoutes from './features/activity/routes/activityRoute.js';
import chatRoutes from './features/chat/routes/chatRoutes.js';
import productRoutes from './features/product/routes/productRoutes.js';
import cors from 'cors'
import customerRoutes from './features/customers/routes/customerRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import notificationRouter from './features/Notification/routes/notificationRoute.js';
import searchRoute from './features/product/routes/productSearchRoute.js';
import customerSearchRoute from './features/customers/routes/customerSearchRoute.js';
import NotificationController from './features/Notification/controller/notificationController.js';
import helmet from 'helmet'


env.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors(
  {
    origin: '*', // Allow requests from this origin
  }
));

//Protection
app.use(helmet());

// Configure CSP
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'"]
  }
}));

//Routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/activity', authorizeUser, activityRoutes)
app.use('/api/v1/chat', authorizeUser, chatRoutes)
app.use('/api/v1/customers', authorizeUser, customerRoutes);
app.use('/api/v1/products', authorizeUser, productRoutes);
app.use('/api/v1/notifications', authorizeUser, notificationRouter);

app.post("/api/v1/subTopic", NotificationController.subToTopic);
app.post("/api/v1/unsubTopic", NotificationController.unsubToTopic);




app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ message: `Server Error Occured ${err}` })
})

// Search for products route
app.use('/api/v1/search', authorizeUser, searchRoute);


app.use('/api/v1/search-customers', authorizeUser, customerSearchRoute);


//handles images uploaded
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// init socket.io
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",  // Adjust this to your client origin if needed
    methods: ["GET", "POST"]
  }
});

// implement socket.io
io.on('connection', (socket) => {
  console.log('A user connected');

  // Join a room
  socket.on('join room', (room) => {
    try {
      socket.join(room);
      console.log(`User joined room: ${room}`);
    } catch (e) {
      console.log(e);
    }
  });

  // Handle my conversation
  socket.on('join my conversations', (userId) => {
    try {
      socket.join(userId);
      console.log(`conversation joined: ${userId}`);
    } catch (e) {
      console.log(e)
    }
  });

  socket.on('conversation', ({ conversation, userId }) => {
    io.to(userId).emit('conversation', conversation);
  });


  // Handle chat messages
  socket.on('chat message', (data) => {
    try {
      const { room, conversation, message, recieverId } = data;
      io.to(room).emit('chat message', message); // Broadcast message to specific room
      io.to(recieverId).emit('conversation', conversation);
      io.to(message.sender).emit('conversation', conversation);
    } catch (e) {
      console.log(e)
    }
  });

  socket.on('leave room', (room) => {
    try {
      socket.leave(room);
      console.log(`User leaved room: ${room}`);
    } catch (e) {
      console.log(e);
    }
  });

  // Handle my conversation
  socket.on('leave my conversations', (userId) => {
    try {
      socket.leave(userId);
      console.log(`conversation leaved: ${userId}`);
    } catch (e) {
      console.log(e)
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {

  connectToMongo().then((v) => {

    console.log(`Server is running on port ${port}`);
  }).catch((e) => {
    console.log(`Error: ${e}`);
  })
});