import User from '../../auth/models/user.js';
import Conversation from '../models/conversation.js';
import Message from  '../models/message.js';

export const sendMessage = async (req, res) => {
  try {
    // const { conversationId } = req.params;
    const { userId, text, conversationId } = req.body;

    // Find the conversation
    let conversation = null;
    if(conversationId){
      conversation = await Conversation.findById(conversationId);
    }

    if (!conversation) {
       // Check if reciever already exists
       const recieverUser = await User.findById(userId);
       if (!recieverUser) {
         return res.status(400).json({ message: 'User does not exist' });
       }

      // If the conversation doesn't exist, create a new one
      conversation = new Conversation({
        participants: [
          { _id: userId, username: recieverUser.name, profileImage: recieverUser.pp },
          { _id: req.user.id, username: req.user.username, profileImage: req.user.profileImage }
        ],
        lastMessage: {
          text,
          sender: req.user.id,
          senderName: req.user.username,
          senderProfileImage: req.user.profileImage,
          timestamp: new Date()
        },
        lastMessageTimestamp: new Date(),
        unreadMessages: 1,
      });
      await conversation.save();

    } else {
      let unread = 0;
      console.log(`unreadMessages: ${conversation.unreadMessages}`);
      console.log(`sender is me: ${conversation.lastMessage.sender == req.user.id}`);

      if(conversation.lastMessage.sender == req.user.id){
        unread = conversation.unreadMessages + 1;
      }else{
        unread = 1;
      }

      // Update the conversation
      conversation.lastMessage = {
        text,
        sender: req.user.id,
        senderName: req.user.username,
        senderProfileImage: req.user.profileImage,
        timestamp: new Date()
      };
      conversation.lastMessageTimestamp = new Date();
      conversation.unreadMessages = unread;

     

      // Increment the unread message count for the other participants
      // conversation.participants.forEach(participant => {
      //   if (participant._id.toString() !== userId) {
      //     conversation.unreadMessages++;
      //   }
      // });
      await Conversation.findByIdAndUpdate(conversation._id, conversation);
    }

    const message = new Message({
      conversationId,
      text,
      sender: userId,
    });

    await message.save();

    res.status(201).json({ message, conversation });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { conversationId, page = 1, limit = 10 } = req.query;

    if(!conversationId){
      return res.status(400).json({message: "ConversationId is required."})
    }

    const skip = (page - 1) * limit;

    const messages = await Message.find({ conversationId })
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit);
      // .populate('sender', 'username');

    res.json(messages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getConversations = async (req, res) => {
    try {
      
      const userId = req.user.id;
      console.log({userId});
      
      const conversations = await Conversation.find({
        participants: { $elemMatch: { _id: userId } }
      })
        .sort({ lastMessageTimestamp: -1 })
      //   .populate('participants', 'username profileImage')
      //   .populate({
      //     path: 'lastMessage.sender',
      //     select: 'username profileImage'
      //   });

  
      // // Add the senderProfileImage field to the lastMessage object
      // conversations.forEach(conversation => {
      //   const senderProfile = conversation.participants.find(
      //     participant => participant._id.toString() === conversation.lastMessage.sender.toString()
      //   );
      //   conversation.lastMessage.senderProfileImage = senderProfile.profileImage;
      // });
  
      res.json(conversations);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

export const markMessagesSeen = async (req, res) => {
    try {
      const { conversationId } = req.params;
      // const { userId } = req.body;
  
      const conversation = await Conversation.findById(conversationId);
  
      if (!conversation) {
        return res.status(404).json({ message: 'Conversation not found' });
      }

      const isMember = conversation.participants.find((e)=>e._id.toString() ===  req.user.id)

      if(!isMember){
        return res.status(403).json({ message: 'You are not a participant in this conversation'});

      }

      if(conversation.lastMessage.sender == req.user.id){
        return res.status(403).json({ message: 'You are the sender'});
      }


      // Update the unreadMessages field for the user
      // const userIndex = conversation.participants.findIndex(participant => participant._id.toString() === req.user.id);
      conversation.unreadMessages = 0;
  
      // Save the updated conversation
      await Conversation.findByIdAndUpdate(conversation._id, conversation);

      res.json({ conversation });
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: error.message });
    }
  };

  export const toogleStatus = async (req, res) => {
    try {
      const { conversationId, status } = req.params;
      // const { userId } = req.body;
  
      const conversation = await Conversation.findById(conversationId);
  
      if (!conversation) {
        return res.status(404).json({ message: 'Conversation not found' });
      }

      const isMember = conversation.participants.find((e)=>e._id.toString() ===  req.user.id)

      if(!isMember){
        return res.status(403).json({ message: 'You are not a participant in this conversation'});

      }


      conversation.participants.forEach((e, i)=>{
        if(req.user.id == e.id){
          conversation.participants[i].online = status == "0" ? "offline": status == "1" ? "online" : "typing"
        }
      });
  
      // Save the updated conversation
      await Conversation.findByIdAndUpdate(conversation._id, conversation);

      res.json({ message: `Changed status` });
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: error.message });
    }
  };


export const createConversation = async (req, res) => {
  try {
    const { newConv } = req.body;
    const conversation = await Conversation.create(newConv);
    res.status(201).json(conversation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()      
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};