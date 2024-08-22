import express from 'express';
import * as chatController from '../controllers/chatController.js';

const chatRoutes = express.Router();

chatRoutes.post('/conversations/messages', chatController.sendMessage);
chatRoutes.get('/messages', chatController.getMessages);
chatRoutes.get('/users', chatController.getUsers);
chatRoutes.get('/conversations', chatController.getConversations);
chatRoutes.post('/conversations', chatController.createConversation);
chatRoutes.post('/conversations/:conversationId/seen', chatController.markMessagesSeen);
chatRoutes.post('/conversations/:conversationId/status/:status', chatController.toogleStatus);

export default chatRoutes;