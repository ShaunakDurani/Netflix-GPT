import { useState } from "react";
import { Header } from "./Header";

const Login = () => {
  const [isSignedIn, setisSignedIn] = useState(true);

  const handleSignIn = () => {
    setisSignedIn(!isSignedIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          alt="bg-image"
        />
      </div>

      <form className="absolute bg-black w-2/6 my-36 mx-auto right-0 left-0 p-12 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-2 m-2">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full rounded-lg bg-gray-600 bg-opacity-10 border-solid border-[1px] border-white"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 m-2 w-full rounded-lg bg-gray-600 bg-opacity-10 border-solid border-[1px] border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full rounded-lg bg-gray-600 bg-opacity-10 border-solid border-[1px] border-white"
        />
        <button className=" bg-red-600 p-2 m-2 w-full rounded-lg font-bold">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 m-2 cursor-pointer" onClick={handleSignIn}>
          {isSignedIn
            ? "New to Netflix? Sign up now."
            : "Already Registered Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
