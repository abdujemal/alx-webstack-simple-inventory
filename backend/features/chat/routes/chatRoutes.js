import express from 'express';
import * as chatController from '../controllers/chatController.js';

const chatRoutes = express.Router();

chatRoutes.post('/conversations/messages', chatController.sendMessage);
chatRoutes.get('/messages', chatController.getMessages);
chatRoutes.get('/conversations', chatController.getConversations);
chatRoutes.post('/conversations', chatController.createConversation);
chatRoutes.post('/conversations/:conversationId/seen', chatController.markMessagesSeen);

export default chatRoutes;