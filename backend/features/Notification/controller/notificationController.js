// controllers/notificationController.js
import NotificationService from '../service/notificationService.js';

class NotificationController {
  static async createNotification(req, res) {
    try {
        const { userId, message } = req.body;
        const notification = await NotificationService.createNotification(userId, message);
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }

  static async getNotifications(req, res) {
    try {
        const { page = 1, limit = 10 } = req.params;
        const notifications = await NotificationService.getNotifications(req.user.id, page, limit);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }

  static async markAsRead(req, res) {
    try {
        const { notificationId } = req.params;
        const notification = await NotificationService.markAsRead(notificationId, req.user.id);
        if (notification) {        
            res.status(200).json(notification);
        } else {
            res.status(404).json({ error: 'Notification not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
}

export default NotificationController;
