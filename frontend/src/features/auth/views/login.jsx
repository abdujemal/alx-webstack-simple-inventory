import { Link } from "react-router-dom";
import Logo from "../../../shared/view/components/logo";
import MainButton from "../../../shared/view/components/mainButton";
import { useState } from "react";
import { useAuth } from "../controllers/AuthProvider";
import { GOOGLE_URL } from "../../../shared/utils/constants";


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
        <div className="flex overflow-hidden flex-col bg-gradient-to-b from-primary to-white justify-center items-center px-20 py-28 max-md:px-5 max-md:pb-24">
            <div className="flex flex-col max-w-full w-[679px]">
                <Logo/>
                <section className="flex flex-col justify-center items-center px-20 py-24 mt-8 bg-white rounded-lg border border-solid border-black border-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <form onSubmit={loginSubmit}>
                        <div className="flex flex-col mb-0 max-w-full w-[390px] max-md:mb-2.5">
                            <div className="self-center text-xl font-bold text-black">
                                USER LOGIN
                            </div>                        
                            <div className="flex gap-5 px-3.5 py-3 mt-14 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50 max-md:mt-10">
                                <img src="person.svg"/>
                                <div  className="flex-1 my-auto "><input onChange={(e)=>setEmail(e.target.value)} className="w-full" placeholder="Email" type="email" name="email" ></input></div>
                            </div>
                            <div className="flex gap-5 px-4 py-3 mt-5 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50">
                                <img src="password.svg"/>
                                <div className="flex-1 my-auto "><input onChange={(e)=>setPassword(e.target.value)} className="w-full"  placeholder="Password" type="password" name="password"></input></div>
                            </div>
                            <p className="text-red-700 mt-2">{error}</p>
                            <div className="flex justify-between mt-7">
                                <div className="flex gap-3 self-start">
                                    <input type="checkbox"></input>
                                    <div className="text-black">
                                        Remember me
                                    </div>
                                </div>
                                <Link className="text-blue-800 cursor-pointer hover:underline" to={'/register'} >
                                    Forgot password?
                                </Link>
                                
                            </div>
                            <MainButton isLoading={loading} text={"Login"} isSubmit/>
                            <div className="flex gap-2.5 items-center self-center mt-9 max-w-full text-xl text-black whitespace-nowrap w-[247px]">
                                <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[97px]" />
                                <div className="self-stretch">OR</div>
                                <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[97px]" />
                            </div>
                            <Link to={GOOGLE_URL} className="flex cursor-pointer gap-4 px-14 py-2 mt-6 text-xl text-black bg-white rounded-lg border border-solid border-black border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
                                <img src="Google.png" alt="google" />
                                <div className="grow shrink my-auto w-[219px]">
                                    Continue with google
                                </div>
                            </Link>
                            <div className="flex gap-1 justify-center mt-6 max-md:mx-2.5">
                                <div className="text-black">Don’t have an account?</div>
                                <Link className="text-blue-800 hover:underline" to={'/register'} >
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

export default Login