import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className='absolute px-10 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center'>
        <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        {user && <div className='flex gap-2'>
          <img src={user.photoURL} className='w-12 h-12 bg-red-600' alt="use-icon"/>
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header