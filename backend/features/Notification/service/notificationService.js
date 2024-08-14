// services/notificationService.js
import Notification from "../model/notificationModel.js";
import messaging from "./firebaseNotification.js";

class NotificationService {
  static async createNotification(userId, message) {
    try {
        const notification = new Notification({ userId, message });
        await notification.save();

        const payload = {
          notification: {
            title: "New Notification",
            body: message,
          },
        };

        await messaging.sendToTopic(userId, payload)
        return notification;
    } catch (error) {
        throw new Error(error);
    }
  }

  static async getNotifications(userId, page, limit) {
    try {
        const skip = (page - 1) * limit;

        return await Notification.find({ userId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
    } catch (error) {
        throw new Error('Error fetching notifications');
    }
  }

  static async markAsRead(notificationId, userId) {
    try {
        return await Notification.findByIdAndUpdate(notificationId, { isRead: true, userId }, { new: true });
    } catch (error) {
        throw new Error('Error updating notification');
    }
  }
}

export default NotificationService;
