import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  participants: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      username: { type: String },
      profileImage: { type: String },
      online: {type: String, enum: ["online","offline"], default: "online"}
    }
  ],
  lastMessage: {
    text: { type: String },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    senderName: { type: String },
    senderProfileImage: { type: String },
    timestamp: { type: Date }
  },
  lastMessageTimestamp: { type: Date, default: Date.now },
  unreadMessages: { type: Number, default: 0 }
});

const Conversation = mongoose.model('Conversation', conversationSchema);
export default Conversation;