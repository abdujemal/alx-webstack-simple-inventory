

const SignIn = () => {
    return (

        <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 max-md:px-5 max-md:pb-24">
            <div className="flex flex-col max-w-full w-[679px]">
                <div className="self-center text-3xl text-center text-white">
                    Inventory
                </div>
                <div className="flex flex-col justify-center items-center px-20 py-24 mt-8 bg-white rounded-lg border border-solid border-black border-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <div className="flex flex-col mb-0 max-w-full w-[390px] max-md:mb-2.5">
                        <div className="self-center text-3xl font-bold text-black">
                            USER LOGIN
                        </div>
                        <div className="flex gap-5 px-3.5 py-3 mt-14 text-2xl whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-black text-opacity-50 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ca274240674c8695790a138a7667ef2d45d21b6e47838c58b874f814ef9bd1d?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                className="object-contain shrink-0 aspect-square w-[37px]"
                            />
                            <div className="flex-auto my-auto w-[298px]">Username</div>
                        </div>
                        <div className="flex gap-5 px-4 py-3 mt-5 text-2xl whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-black text-opacity-50">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6719aed9f107289e77f76b85b6599da9e7fbe5c372050df9a307efe73dce6e4d?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                className="object-contain shrink-0 w-9 aspect-square"
                            />
                            <div className="flex-auto my-auto w-[298px]">Password</div>
                        </div>
                        <div className="flex gap-10 mt-7">
                            <div className="flex flex-1 gap-5 self-start">
                                <div className="flex flex-col items-center my-auto rounded-sm bg-neutral-700 h-[22px] w-[22px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9f85a048aae23d1f71fd8d9ab2c0d9d7b7f152fd895ad4775bc3d39ee6b3ad4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                        className="object-contain aspect-square w-[22px]"
                                    />
                                </div>
                                <div className="text-2xl text-black basis-auto">
                                    Remember me
                                </div>
                            </div>
                            <div className="grow shrink text-2xl text-black w-[137px]">
                                Forgot password?
                            </div>
                        </div>
                        <div className="self-center px-16 py-2.5 mt-6 max-w-full text-2xl font-extrabold text-white whitespace-nowrap rounded-lg bg-slate-600 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[183px] max-md:px-5">
                            Login
                        </div>
                        <div className="flex gap-2.5 items-center self-center mt-9 max-w-full text-2xl text-black whitespace-nowrap w-[247px]">
                            <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[97px]" />
                            <div className="self-stretch">OR</div>
                            <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[97px]" />
                        </div>
                        <div className="flex gap-4 px-14 py-3 mt-11 text-2xl text-black bg-white rounded-lg border border-solid border-black border-opacity-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09cac1dd11a150c1e030c09900092d7263638dce003ed4e4093189e22706d805?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                className="object-contain shrink-0 aspect-square w-[37px]"
                            />
                            <div className="grow shrink my-auto w-[219px]">
                                Continue with google
                            </div>
                        </div>
                        <div className="flex gap-2.5 mt-6 mr-8 ml-8 text-xl max-md:mx-2.5">
                            <div className="grow text-black">Don’t have an account?</div>
                            <div className="grow shrink text-blue-800 w-[91px]">
                                Sign up here.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn