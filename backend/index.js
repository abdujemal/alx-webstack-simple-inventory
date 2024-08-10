import express from 'express';

const app = express();
const port = process.env.port || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});