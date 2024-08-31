// ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "../../../shared/components/logo";
import MainButton from "../../../shared/components/mainButton";
import { useAuth } from "../controllers/AuthProvider";
import { GOOGLE_URL } from "../../../shared/utils/constants";
import toast from "react-hot-toast";
import { MdOutlinePassword } from "react-icons/md";


const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams();
  const { error, loading, resetPassword } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetPassword(password, confirmPassword, token)
  };

  return (
    <div className="flex overflow-hidden flex-col bg-gradient-to-b from-primary to-white justify-center items-center px-5 py-10 md:px-20 md:py-28">
        <div className="flex flex-col w-full max-w-[679px]">
            <Logo/>
            <section className="flex flex-col justify-center items-center px-5 py-8 md:px-20 md:py-24 mt-6 md:mt-8 bg-white rounded-lg border border-solid border-black border-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <form onSubmit={handleSubmit} className="w-full max-w-[390px]">
                    <div className="flex flex-col mb-0">
                        <div className="self-center text-lg md:text-xl font-bold text-black">
                            Reset Password
                        </div>                        
                        <div className="flex gap-3 md:gap-5 px-3.5 py-3 mt-5 text-lg md:text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50">
                            <MdOutlinePassword className="w-6 md:w-8"/>
                            <div className="flex-1 my-auto "><input onChange={(e)=>setPassword(e.target.value)} className="w-full" placeholder="Password" type="password" name="password" /></div>
                        </div>
                        <div className="flex gap-3 md:gap-5 px-3.5 py-3 mt-5 text-lg md:text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50">
                            <MdOutlinePassword className="w-6 md:w-8"/>
                            <div className="flex-1 my-auto "><input onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full" placeholder="Confirm Password" type="password" name="password" /></div>
                        </div>
                        <p className="text-red-700 mt-2 text-sm md:text-base">{error}</p>                       
                        <MainButton isLoading={loading} text={"Submit"} isSubmit/>                        
                    </div>
                </form>
            </section>
        </div>
    </div>
  );
};

export default ResetPassword;
