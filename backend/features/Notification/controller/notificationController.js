// controllers/notificationController.js
import NotificationService from '../service/notificationService.js';
import admin from 'firebase-admin'


class NotificationController {
  static async createNotification(req, res) {
    try {
        const { userId, title, message } = req.body;
        const notification = await NotificationService.createNotification(userId, title, message);
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }

  static async getNotifications(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        
        const notifications = await NotificationService.getNotifications(req.user.id, page, limit);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }

  static async subToTopic (req, res){
    const {token, topic} = req.body;
    try {
      const response = await admin.messaging().subscribeToTopic(token, topic);
      res.status(200).json({msg: `Successfully subscribed to topic: ${topic} ${response.successCount}`});
    } catch (error) {
      console.error("Error subscribing to topic:", error);
      res.status(401).json({msg: `Error subscribing to topic: ${error}`});
  
    }
  }

  static async unsubToTopic (req, res){
    const {token, topic} = req.body;
    try {
      const response = await admin.messaging().unsubscribeFromTopic(token, topic);
      res.status(200).json({msg: `Successfully unsubscribed to topic: ${topic} ${response.successCount}`});
    } catch (error) {
      console.error("Error subscribing to topic:", error);
      res.status(401).json({msg: `Error subscribing to topic: ${error}`});
  
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
