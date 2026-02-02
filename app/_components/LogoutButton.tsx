"use client"
import { log } from 'console'
import React from 'react'
import { logoutAction } from '../actions/auth';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router=useRouter();
  const handleLogout= async() =>{
    try {
       await logoutAction();
     //  redirect('/login');
     router.push('/login');
     router.refresh();
    } catch (error) {
      console.log("Logout failed:", error);
    }
    await logoutAction()
  };
  return (
  <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 cursor-pointer">
    
    Logout
  </button>
  )
}
export default LogoutButton