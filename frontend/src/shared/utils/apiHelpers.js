import axios from "axios"
import { getToken } from "../../features/auth/services/localStorageService"

const token = getToken();

export const postRequest = (path="", payload={}, withToken=true, image)=>{
    if(image){
        payload.append('image', image)
    }
    if(withToken){
        if(!token){
            return null;
        }
        return axios.post(path, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
    }else{
        return axios.post(path, payload)
    }
}

export const getRequest = (path="", payload={}, withToken=true)=>{
    
    if(withToken){
        if(!token){
            return null;
        }
        return axios.get(path,  {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            params: payload,
        })
    }else{
        return axios.get(path, {
            params: payload,
        })
    }
}

export const putRequest = (path="", payload={}, withToken=true, image)=>{
    if(image){
        payload.append('image', image)
    }
    if(withToken){
        if(!token){
            return null;
        }
        return axios.put(path, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
    }else{
        return axios.put(path, payload)
    }
}

export const patchRequest = (path="", payload={}, withToken=true, image)=>{
    if(image){
        payload.append('image', image)
    }
    if(withToken){
        if(!token){
            return null;
        }
        return axios.patch(path, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
    }else{
        return axios.patch(path, payload)
    }
}

export const deleteRequest = (path, withToken)=>{
    
    if(withToken){
        if(!token){
            return null;
        }
        return axios.delete(path,  {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
           
        });
    }else{
        return axios.delete(path)
    }
}

