// routes/notificationRoutes.js
import express from 'express';
import NotificationController from '../controller/notificationController.js';

const notificationRouter = express.Router();

notificationRouter.post('/', NotificationController.createNotification);
notificationRouter.get('/', NotificationController.getNotifications);
notificationRouter.patch('/:notificationId/read', NotificationController.markAsRead);

export default notificationRouter;