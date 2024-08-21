import io from 'socket.io-client';

export const socket = io('http://localhost:3000');

export const joinMyConversation = (userId) => {
    socket.emit('join my conversations', userId);
};

export const joinRoom = (conversationId) => {
    socket.emit('join room', conversationId);
};

export const listenForUpdates = (handleMessage, handleConversation) => {
  socket.on('chat message', handleMessage);

  socket.on('conversation', handleConversation);
};

export const stopConversation = () => {
  socket.off('conversation');
};

export const stopChatMessage = () => {
    socket.off('chat message');
};

export const leaveMyConversation = (userId) => {
  socket.emit('leave my conversations', userId);
};

export const leaveRoom = (conversationId) => {
  socket.emit('leave room', conversationId);
};

export const sendTypingEvent = (room, username) => {
  socket.emit('typing', { room, username });
  setTimeout(() => {
    socket.emit('stopTyping', { room });
  }, 2000); // Stop typing after 2 seconds
};
