import { Link } from "react-router-dom";
import Logo from "../../../shared/components/logo";
import MainButton from "../../../shared/components/mainButton";
import { useState } from "react";
import { useAuth } from "../controllers/AuthProvider";
import { GOOGLE_URL, roles } from "../../../shared/utils/constants";
import { MdOutlineVerifiedUser, MdOutlineEmail } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { dataURLtoFile } from "../services/helpers.js";

import toast from "react-hot-toast";

const Register = () => {
  const { register, error, loading, setError } = useAuth();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      const imageFile = dataURLtoFile(image, "image.jpg");
      await register(name, email, password, role, imageFile);
    }
  };

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
    <div className="flex overflow-hidden flex-col bg-gradient-to-b from-primary to-white justify-center items-center px-5 py-10 sm:px-10 sm:py-20 md:px-20 md:py-28">
      <div className="flex flex-col w-full max-w-[679px]">
        <Logo />
        <section className="flex flex-col justify-center items-center px-5 py-8 sm:px-10 sm:py-16 md:px-20 md:py-24 mt-6 md:mt-8 bg-white rounded-lg border border-solid border-black border-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <form onSubmit={registerSubmit}>
            <div className="flex flex-col mb-0 w-full max-w-[390px] mx-auto">
              <div className="text-lg sm:text-xl font-bold text-black text-center">
                REGISTER USER
              </div>
              <div className="flex justify-center mt-6">
                {image ? (
                  <img src={image} className="h-32 w-32 rounded-full" alt="user_image" />
                ) : (
                  <IoPersonCircle className="h-32 w-32 text-primary" />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="shadow-sm w-full mt-2 rounded self-center"
              />
              <div className="flex flex-col gap-5 mt-8 sm:mt-10">
                <div className="flex gap-3 items-center px-3.5 py-3 text-base sm:text-lg md:text-xl bg-white rounded-lg border border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                  <img src="person.svg" alt="user icon" className="w-6 sm:w-8" />
                  <div className="flex-1">
                    <input
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      className="w-full"
                      placeholder="User Name"
                      type="text"
                      name="text"
                    />
                  </div>
                </div>
                <div className="flex gap-3 items-center px-3.5 py-3 text-base sm:text-lg md:text-xl bg-white rounded-lg border border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                  <MdOutlineEmail size={30} />
                  <div className="flex-1">
                    <input
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                      placeholder="Email"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex gap-3 items-center px-3.5 py-3 text-base sm:text-lg md:text-xl bg-white rounded-lg border border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                  <MdOutlineVerifiedUser size={30} />
                  <div className="flex-1">
                    <select
                      required
                      className="block w-full py-2 px-3 border border-none bg-white rounded-md shadow-sm focus:outline-none"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="" disabled>
                        Select your role
                      </option>
                      {roles.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-3 items-center px-3.5 py-3 text-base sm:text-lg md:text-xl bg-white rounded-lg border border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                  <img src="password.svg" alt="password icon" className="w-6 sm:w-8" />
                  <div className="flex-1">
                    <input
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full"
                      placeholder="Password"
                      type="password"
                      name="password"
                    />
                  </div>
                </div>
                <div className="flex gap-3 items-center px-3.5 py-3 text-base sm:text-lg md:text-xl bg-white rounded-lg border border-gray-500 border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                  <img src="password.svg" alt="confirm password icon" className="w-6 sm:w-8" />
                  <div className="flex-1">
                    <input
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full"
                      placeholder="Confirm Password"
                      type="password"
                      name="confirmPassword"
                    />
                  </div>
                </div>
                <p className="text-red-700 mt-2 text-sm sm:text-base">{error}</p>
                <div className="flex flex-row sm:flex-row justify-between mt-5">
                  <div className="flex gap-2 items-center mb-3 sm:mb-0">
                    <input id="rememberme" type="checkbox" />
                    <label htmlFor="rememberme" className="text-sm sm:text-base">
                      Remember me
                    </label>
                  </div>
                  <Link className="text-blue-800 text-sm sm:text-base hover:underline" to={'/register'}>
                    Forgot password?
                  </Link>
                </div>
                <MainButton isLoading={loading} text={"Submit"} isSubmit />
                <div className="flex flex-row sm:flex-row gap-2.5 items-center justify-center mt-6 text-base sm:text-lg">
                  <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[70px] sm:w-[97px]" />
                  <div className="self-stretch">OR</div>
                  <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[70px] sm:w-[97px]" />
                </div>
                <Link
                  to={GOOGLE_URL}
                  className="flex cursor-pointer gap-4 px-6 py-2 mt-4 sm:px-10 sm:py-2 text-base sm:text-lg text-black bg-white rounded-lg border border-solid border-black border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                >
                  <img src="Google.png" alt="google" className="w-6 sm:w-8" />
                  <div className="grow shrink my-auto">
                    Continue with Google
                  </div>
                </Link>
                <div className="flex gap-1 justify-center mt-4 sm:mt-6 text-sm sm:text-base">
                  <div className="text-black">Already have an account?</div>
                  <Link className="text-blue-800 hover:underline" to={'/login'}>
                    Sign in here.
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
