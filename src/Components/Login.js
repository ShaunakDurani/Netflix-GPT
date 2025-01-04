import { useState, useRef } from "react";
import { Header } from "./Header";
import checkValidData from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignedIn, setisSignedIn] = useState(null);
  const [errMessage, seterrMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Email = useRef(null);
  const Password = useRef(null);
  const FullName = useRef(null);

  const handleSignIn = () => {
    setisSignedIn(!isSignedIn);
  };

  const handleClick = () => {
    console.log(Email.current.value);
    console.log(Password.current.value);
    const message = checkValidData(Email.current.value, Password.current.value);
    seterrMessage(message);
    if (message) return;

    //Sign-in / Sign-out
    if (!isSignedIn) {
      console.log("Inhere");
      //Sign-up logic
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed ups
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Shaunak Durani",
            photoURL:
              "https://avatars.githubusercontent.com/u/144266558?s=400&v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              seterrMessage(error.message);
            });
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //Sign-in logic
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + "-" + errorMessage);
        });
    }
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-2/6 my-36 mx-auto right-0 left-0 p-12 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-2 m-2">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={FullName}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full rounded-lg bg-gray-600 bg-opacity-10 border-solid border-[1px] border-white"
          />
        )}
        <input
          ref={Email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 m-2 w-full rounded-lg bg-gray-600 bg-opacity-10 border-solid border-[1px] border-white"
        />
        <input
          ref={Password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full rounded-lg bg-gray-600 bg-opacity-10 border-solid border-[1px] border-white"
        />
        <p className="text-red-500 py-2 font-bold">{errMessage}</p>
        <button
          className=" bg-red-600 p-2 m-2 w-full rounded-lg font-bold"
          onClick={handleClick}
        >
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
