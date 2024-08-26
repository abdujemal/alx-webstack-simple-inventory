import { Link } from "react-router-dom";
import Logo from "../../../shared/components/logo";
import MainButton from "../../../shared/components/mainButton";
import { useState } from "react";
import { useAuth } from "../controllers/AuthProvider";
import { GOOGLE_URL } from "../../../shared/utils/constants";
import toast from "react-hot-toast";


const Login = () => {

    const { login, error, loading } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmit = async (e) =>{
        e.preventDefault()
        if(!loading){
            await login(email, password)
        }
    }

    return (
        <div className="flex overflow-hidden flex-col bg-gradient-to-b from-primary to-white justify-center items-center px-5 py-10 md:px-20 md:py-28">
            <div className="flex flex-col w-full max-w-[679px]">
                <Logo/>
                <section className="flex flex-col justify-center items-center px-5 py-8 md:px-20 md:py-24 mt-6 md:mt-8 bg-white rounded-lg border border-solid border-black border-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    <form onSubmit={loginSubmit} className="w-full max-w-[390px]">
                        <div className="flex flex-col mb-0">
                            <div className="self-center text-lg md:text-xl font-bold text-black">
                                USER LOGIN
                            </div>                        
                            <div className="flex gap-3 md:gap-5 px-3.5 py-3 mt-6 md:mt-14 text-lg md:text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50">
                                <img src="person.svg" className="w-6 md:w-8"/>
                                <div className="flex-1 my-auto "><input onChange={(e)=>setEmail(e.target.value)} className="w-full" placeholder="Email" type="email" name="email" /></div>
                            </div>
                            <div className="flex gap-3 md:gap-5 px-3.5 py-3 mt-5 text-lg md:text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50">
                                <img src="password.svg" className="w-6 md:w-8"/>
                                <div className="flex-1 my-auto "><input onChange={(e)=>setPassword(e.target.value)} className="w-full" placeholder="Password" type="password" name="password" /></div>
                            </div>
                            <p className="text-red-700 mt-2 text-sm md:text-base">{error}</p>
                            <div className="flex flex-row md:flex-row justify-between mt-5 md:mt-7">
                                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-0">
                                    <input type="checkbox" />
                                    <div className="text-black text-sm md:text-base">
                                        Remember me
                                    </div>
                                </div>
                                <Link className="text-blue-800 text-sm md:text-base cursor-pointer hover:underline" to={'/register'}>
                                    Forgot password?
                                </Link>
                            </div>
                            <MainButton isLoading={loading} text={"Login"} isSubmit/>
                            <div className="flex flex-row md:flex-row gap-2.5 items-center justify-center mt-6 md:mt-9 text-lg md:text-xl text-black whitespace-nowrap">
                                <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[70px] md:w-[97px]" />
                                <div className="self-stretch">OR</div>
                                <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[70px] md:w-[97px]" />
                            </div>
                            <Link to={GOOGLE_URL} className="flex cursor-pointer gap-4 px-6 py-2 mt-4 md:mt-6 text-lg md:text-xl text-black bg-white rounded-lg border border-solid border-black border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                <img src="Google.png" alt="google" className="w-6 md:w-8"/>
                                <div className="text-center grow shrink my-auto w-[160px] md:w-[219px]">
                                    Continue with Google
                                </div>
                            </Link>
                            <div className="flex gap-1 justify-center mt-4 md:mt-6 text-sm md:text-base">
                                <div className="text-black">Don’t have an account?</div>
                                <Link className="text-blue-800 hover:underline" to={'/register'}>
                                    Sign up here.
                                </Link>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Login;
