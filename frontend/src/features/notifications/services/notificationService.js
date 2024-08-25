import { getRequest, patchRequest } from "../../../shared/utils/apiHelpers";
import { NOTIFICATIONS_URL } from "../../../shared/utils/constants";


export const getNotification = async (page = 1, limit = 10) =>{
    try{
        const res = await getRequest(
            `${NOTIFICATIONS_URL}/`, 
            { page, limit },
        );
        if(!res){
            throw new Error('Failed to authenticate token')
        }
        return res.data;
    }catch(error){
        console.log(error)
        throw new Error(error.response?.data?.message || 'Geting Notifications failed');
    }
}

export const makeNotificationRead = async (notificationId) =>{
    try{
        const res = await patchRequest(
            `${NOTIFICATIONS_URL}/${notificationId}/read`
        );
        if(!res){
            throw new Error('Failed to authenticate token')
        }
        return res.data;
    }catch(error){
        console.log(error)
        throw new Error(error.response?.data?.message || 'Make a Notification read has failed');
    }
}