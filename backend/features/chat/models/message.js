import  mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  conversationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  text: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);
export default Message;
// Person : {
//     person_id: '123',
//     last_login: 12.06.2008,
//     online: true
// }

// Conversation : {
// conversation_id: append the greater person_id to the lower person_id, // person_1_id =123 and person_2_id =124 then its 123124

// messages: [ 
//     { message_id: 1, 
//       message_text : 'Hi what's up',
//       sender_id : 123,
//       receiver_id: 124,
//       timestamp : 12344567891
//     },
//     { message_id: 2, 
//       message_text : 'fine',
//       sender_id : 124,
//       receiver_id: 123,
//       timestamp : 12344567891
//     }
//    ]
// }