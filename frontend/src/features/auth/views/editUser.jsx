import React, { useEffect, useState } from 'react';
import { useAuth } from '../controllers/AuthProvider';
import { dataURLtoFile } from '../services/helpers';
import { roles } from "../../../shared/utils/constants";
import {  MdOutlineVerifiedUser , MdOutlineEmail} from "react-icons/md";


const EditUser = ({ isOpen, onClose }) => {
    if (!isOpen) return <div/>;

    const { error, loading, setError, update, currentUser } = useAuth()

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState(null);
    const [urlImage, setUrlImage] = useState("")

    useEffect(()=>{
        setName(currentUser.name)
        setEmail(currentUser.email)
        setRole(currentUser.role)
        setUrlImage(currentUser.pp)
    },[])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!loading){
            if(password != confirmPassword){
            setError("Password does not much")
            return;
            }
            if(image){
                const imageFile = dataURLtoFile(image, 'image.jpg')
                await update(name, email, password, role, null, imageFile)
                onClose()
            }else{
                await update(name, email, password, role, urlImage, null)
                onClose()
            }
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        
        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        
        reader.readAsDataURL(file);
        }
    };  


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg flex flex-col shadow-lg max-h-[75%] w-[45%]">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-700">Update Profile</h2>
                </div>
                <div className="px-28 flex-1 overflow-auto">
                    {
                    image ? 
                    <img src={image} className=" h-32 w-32 m-auto mt-6 rounded-full"  alt="user_image"/>  :
                    <img src={urlImage} className=" h-32 w-32 m-auto mt-6 rounded-full" />                      
                    }  
                    <input type="file" accept="image/*" onChange={handleFileChange} className=" shadow-sm w-fit px-2 py-1 mt-2 rounded self-center"/>
                    <div className="flex gap-5 px-3.5 py-3 mt-5 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50 max-md:mt-10">
                        <img src="person.svg"/>
                        <div  className="flex-1 my-auto "><input value={name} required onChange={(e)=>setName(e.target.value)} className="w-full" placeholder="User Name" type="text" name="text" ></input></div>
                    </div>
                    <div className="flex gap-5 px-3.5 py-3 mt-5 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50 max-md:mt-10">
                        <MdOutlineEmail size={30}/>
                        <div  className="flex-1 my-auto "><input value={email} required readOnly className="w-full" placeholder="Email" type="email" name="email" ></input></div>
                    </div>
                    <div className="flex gap-5 px-3.5 py-3 mt-5 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50 max-md:mt-10">
                        <MdOutlineVerifiedUser className="my-auto" size={30}/>
                        <div  className="flex-1 my-auto "> 
                        {/* <input onChange={(e)=>set(e.target.value)} className="w-full" placeholder="Email" type="email" name="email" >
                        </input> */}                                
                        <select 
                            required
                            className="block w-full py-2 px-3 border border-none bg-white rounded-md shadow-sm focus:outline-none"
                            value={role} onChange={(e)=>setRole(e.target.value)}>
                            <option className="text-gray-900 hover:bg-indigo-100" value="" disabled>Select your role</option>
                            {
                            roles.map((e)=><option key={e} value={e}>{e}</option>)
                            }
                        </select>
                        </div>
                    </div>
                    <div className="flex gap-5 px-4 py-3 mt-5 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50">
                        <img src="password.svg"/>
                        <div className="flex-1 my-auto "><input onChange={(e)=>setPassword(e.target.value)} className="w-full"  placeholder="Password" type="password" name="password"></input></div>
                    </div>
                    <div className="flex gap-5 px-4 py-3 mt-5 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50">
                        <img src="password.svg"/>
                        <div className="flex-1 my-auto "><input onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full"  placeholder="Confirm Password" type="password" name="confirmPassword"></input></div>
                    </div>
                    <p className="text-red-700 mt-2">{error}</p>
                </div>

                <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                    <button onClick={handleSubmit}  className={` ${loading ? "cursor-wait bg-secondary" : " cursor-pointer bg-primary"} px-4 py-2 text-white rounded hover:bg-secondary`}>{ loading ? "Loading..." : "Save"}</button>
                </div>
            </div>
        </div>
    );
}

export default EditUser;
