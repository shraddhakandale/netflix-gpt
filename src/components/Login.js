import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate form data
    if (isSignInForm) {
      const errormsg = checkValidData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(errormsg);
    } else {
      const errormsg = checkValidData(
        email.current.value,
        password.current.value,
        fullName.current.value
      );
      setErrorMessage(errormsg);
    }

    if (errorMessage) return;

    // Sign up or Sign In
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm((prevIsSignInForm) => !prevIsSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="min-h-screen object-cover"
          src={BG_IMG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black bg-opacity-80 text-white md:w-3/12 w-[75%] m-auto right-0 left-0 top-0 bottom-0 h-fit rounded-lg"
      >
        <h1 className="font-bold text-2xl w-full my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-3 rounded my-4 w-full bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-3 rounded my-4 w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 rounded my-4 w-full bg-gray-600"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-3 rounded my-4 bg-red-700 w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already Registered. Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
