import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setIsSignInForm(prevIsSignInForm => !prevIsSignInForm)
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute p-12 bg-black bg-opacity-80 text-white w-3/12 m-auto right-0 left-0 top-0 bottom-0 h-fit rounded-lg">
        <h1 className="font-bold text-2xl w-full my-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-3 rounded my-4 w-full bg-gray-600"/>}
        <input type="email" placeholder="Email address" className="p-3 rounded my-4 w-full bg-gray-600"/>
        <input type="password" placeholder="Password" className="p-3 rounded my-4 w-full bg-gray-600"/>
        <button className="p-3 rounded my-4 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already Registered. Sign In Now."}</p>
      </form>
    </div>
  );
};

export default Login;
