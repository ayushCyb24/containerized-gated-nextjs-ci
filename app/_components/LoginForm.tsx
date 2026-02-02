"use client"
import React from 'react'
import { loginAction } from '../actions/auth'

const LoginForm = () => {
  return (
   <form action={loginAction} className="space-x-4">
    <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" placeholder="Enter your email" required 
        className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm
         focus:ring-blue-500 focus:border-blue-500" />
    </div>
    <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" name="password" placeholder="Enter your password" required 
        className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm
         focus:ring-blue-500 focus:border-blue-500" />
    </div>
    <button type="submit"   className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md
     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Login
    </button>
   </form>
  )
}

export default LoginForm
