// chatService.js
import axios from 'axios';
import { getRequest, postRequest } from '../../../shared/utils/apiHelpers';
import { CHAT_URL } from '../../../shared/utils/constants';


export const sendMessage = async (conversationId, text, userId) => {
  try {
    const response = await postRequest(`${CHAT_URL}/conversations/messages`, {
        userId, 
        text, 
        conversationId 
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error(error.response?.data?.message || 'Error sending message');
  }
};

export const getMessages = async ( conversationId, page = 1, limit = 10 ) => {
  try {
    const response = await getRequest(`${CHAT_URL}/messages`,{ conversationId, page, limit},);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw new Error(error.response?.data?.message || 'Error fetching messages');
  }
};

export const getConversations = async () => {
  try {
    const response = await getRequest(`${CHAT_URL}/conversations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching conversations:', error);
    throw new Error(error.response?.data?.message || 'Error fetching conversations');
  }
};

export const createConversation = async (participants) => {
  try {
    const response = await postRequest(`${CHAT_URL}/conversations`, { participants });
    return response.data;
  } catch (error) {
    console.error('Error creating conversation:', error);
    throw new Error(error.response?.data?.message || 'Error creating conversation');
  }
};

export const markMessagesSeen = async (conversationId) => {
  try {
    const response = await postRequest(`${CHAT_URL}/conversations/${conversationId}/seen`);
    return response.data;
  } catch (error) {
    console.error('Error marking messages as seen:', error);
    throw new Error(error.response?.data?.message || 'Error marking messages as seen');
  }
};

export const toggleStatus = async (conversationId, status) => {
  try {
    const response = await postRequest(`${CHAT_URL}/conversations/${conversationId}/status/${status}`);
    return response.data;
  } catch (error) {
    console.error('Error toggling conversation status:', error);
    throw new Error(error.response?.data?.message || 'Error toggling conversation status');
  }
};