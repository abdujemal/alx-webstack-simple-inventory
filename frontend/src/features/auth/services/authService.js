import axios from "axios"
import { getRequest, postRequest } from "../../../shared/utils/apiHelpers"
import { AUTH_URL } from "../../../shared/utils/constants"
import * as storage from "../services/localStorageService.js"

export const login = async (email, password) =>{
    try{
        const res = await postRequest(
            `${AUTH_URL}/login`, 
            {email,password}, 
            false //pass the token on the header
        );
        if(!res){
            throw new Error('Failed to authenticate token')
        }
        storage.saveToken(res.data.token)
        return res.data;
    }catch(error){
        console.log(error)
        throw new Error(error.response?.data?.message || 'Login failed');
    }
}

export const register = async (name, email, password, role, image) =>{
    try{
        const res = await postRequest(
            `${AUTH_URL}/register`, 
            {name, email, password, role}, 
            false, //pass the token on the header
            image
        );
        if(!res){
            throw new Error('Failed to authenticate token')
        }
        storage.saveToken(res.data.token)
        return res.data;
    }catch(error){
        console.log(error);
        
        throw new Error(error.response?.data?.message || 'Registeration failed');
    }
}

export const update = async (name, email, password, role, pp, image) =>{
    try{
        const res = await postRequest(
            `${AUTH_URL}/update`, 
            pp ?
            {name, email, password, role, pp}:
            {name, email, password, role}, 
            true, //pass the token on the header
            image
        );
        if(!res){
            throw new Error('Failed to authenticate token')
        }
        return res.data;
    }catch(error){
        throw new Error(error.response?.data?.message || 'Update failed');
    }
}

export const sendPasswordChangeEmail = async ( email) =>{
    try{
        const res = await postRequest(
            `${AUTH_URL}/forgot-password`, 
            { email },
            false,       
        );
       
        return res.data;
    }catch(error){
        throw new Error(error.response?.data?.message || 'Sending password reset email failed');
    }
}

export const resetPassword = async ( password, token) =>{
    try{
        const res = await postRequest(
            `${AUTH_URL}/reset-password/${token}`, 
            { password },
            false,       
        );
       
        return res.data;
    }catch(error){
        throw new Error(error.response?.data?.message || 'reset password failed');
    }
}

export const getUser = async () =>{
    try{
        const res = await getRequest(`${AUTH_URL}`, {}, true);
        if(!res){
            throw new Error('Failed to authenticate token')
        }
        return res.data;
    }catch(error){
        // console.log(error);
        
        throw new Error(error.response?.data?.message || 'Geting User failed');
    }
}

export const google = async () =>{
    try{
        console.log("loading");
        
        const res = await getRequest(`${AUTH_URL}/google`, {}, false);
        if(!res){
            throw new Error('Failed to authenticate token')
        }
        return res.data;
    }catch(error){
        throw new Error(error.response?.data?.message || 'Google Authentication failed');
    }
}