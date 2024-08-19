import { Link } from "react-router-dom";
import Logo from "../../../shared/view/components/logo.jsx";
import MainButton from "../../../shared/view/components/mainButton.jsx";
import {  useState } from "react";
import { useAuth } from "../controllers/AuthProvider";
import { GOOGLE_URL, roles } from "../../../shared/utils/constants";
import {  MdOutlineVerifiedUser , MdOutlineEmail} from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { dataURLtoFile } from "../services/helpers.js"

import toast from "react-hot-toast";

const Register = () => {
  
  const {register, error, loading, setError } = useAuth()

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

 

  const registerSubmit = async (e) =>{
      e.preventDefault()
      if(!loading){
        if(password != confirmPassword){
          setError("Password does not much")
          return;
        }
        const imageFile = dataURLtoFile(image, 'image.jpg')
        await register(name, email, password, role, imageFile)
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
      <div className="flex overflow-hidden flex-col bg-gradient-to-b from-primary to-white justify-center items-center px-20 py-28 max-md:px-5 max-md:pb-24">
          <div className="flex flex-col max-w-full w-[679px]">
              <Logo/>
              <section className="flex flex-col justify-center items-center px-20 py-24 mt-8 bg-white rounded-lg border border-solid border-black border-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                  <form onSubmit={registerSubmit}>
                      <div className="flex flex-col mb-0 max-w-full w-[390px] max-md:mb-2.5">
                          <div className="self-center text-xl font-bold text-black">
                              REGISTER USER
                          </div> 
                          {
                            image ? 
                            <img src={image} className=" h-32 w-32 m-auto mt-6 rounded-full"  alt="user_image"/>   :
                            <IoPersonCircle className=" h-32 w-32 m-auto mt-6 rounded-full" />                      
                          }  
                          <input type="file" accept="image/*" onChange={handleFileChange} className=" shadow-sm w-fit px-2 py-1 mt-2 rounded self-center"/>
                          <div className="flex gap-5 px-3.5 py-3 mt-14 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50 max-md:mt-10">
                              <img src="person.svg"/>
                              <div  className="flex-1 my-auto "><input value={name} required onChange={(e)=>setName(e.target.value)} className="w-full" placeholder="User Name" type="text" name="text" ></input></div>
                          </div>
                          <div className="flex gap-5 px-3.5 py-3 mt-5 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50 max-md:mt-10">
                              <MdOutlineEmail size={30}/>
                              <div  className="flex-1 my-auto "><input required onChange={(e)=>setEmail(e.target.value)} className="w-full" placeholder="Email" type="email" name="email" ></input></div>
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
                              <div className="flex-1 my-auto "><input required onChange={(e)=>setPassword(e.target.value)} className="w-full"  placeholder="Password" type="password" name="password"></input></div>
                          </div>
                          <div className="flex gap-5 px-4 py-3 mt-5 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] text-lack text-pacity-50">
                              <img src="password.svg"/>
                              <div className="flex-1 my-auto "><input required onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full"  placeholder="Confirm Password" type="password" name="confirmPassword"></input></div>
                          </div>
                          <p className="text-red-700 mt-2">{error}</p>
                          <div className="flex justify-between mt-7">
                              <div className="flex gap-3 self-start">
                                  <input id="rememberme" type="checkbox"></input>
                                  <label htmlFor="rememberme" className="text-black">
                                      Remember me
                                  </label>
                              </div>
                              <Link className="text-blue-800 cursor-pointer hover:underline" to={'/register'} >
                                  Forgot password?
                              </Link>
                              
                          </div>
                          <MainButton isLoading={loading} text={"Submit"} isSubmit/>
                          <div className="flex gap-2.5 items-center self-center mt-9 max-w-full text-xl text-black whitespace-nowrap w-[247px]">
                              <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[97px]" />
                              <div className="self-stretch">OR</div>
                              <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[97px]" />
                          </div>
                          <Link to={GOOGLE_URL} className="flex cursor-pointer gap-4 px-14 focus:outline-none py-2 mt-6 text-xl text-black bg-white rounded-lg border border-solid border-black border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
                              <img src="Google.png" alt="google" />
                              <div className="grow shrink my-auto w-[219px]">
                                  Continue with google
                              </div>
                          </Link>
                          <div className="flex gap-1 justify-center mt-6 max-md:mx-2.5">
                              <div className="text-black">Already have an account?</div>
                              <Link className="text-blue-800 hover:underline" to={'/login'} >
                                  Sign in here.
                              </Link>
                          </div>
                      </div>
                  </form>
              </section>
          </div>
      </div>
  );
}

export default Register;
