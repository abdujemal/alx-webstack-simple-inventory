// services/notificationService.js
import Notification from "../model/notificationModel.js";
import messaging from "./firebaseNotification.js";
import User from '../../auth/models/user.js'

class NotificationService {
  static async createNotification(userId, title, message, saveIt = true) {
    try {
        const notification = new Notification({ userId, title, message });
        if(saveIt){
          await notification.save();
        }
        console.log(message)

        const payload = {
            data: {
              title: title,
              body: message
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

  static async sendToAll(title, message){
    try{
      const users = await User.find({}, {_id: 1});

      for(var i in users){
        await this.createNotification(users[i]._id, title, message)
      }

    }catch(e){
      throw new Error(`Error Sending to All ${e}`);
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
