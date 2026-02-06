import React from 'react'
import Image from 'next/image';
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-5 gap-5 sm:p-20 bg-gray-100">
     <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome To Contact Manager</h1>
        <p className="mt-2 text-lg text-gray-600">Manage your contacts efficiently and securely.
        </p>
      <Image src="/Contacts.png" alt="Contact Manager" width={300} height={300} className="rounded-lg shadow-lg mt-6 mx-auto"/>
     </div>
      <div className="text-center">
        <p className="mt-2 text-lg text-gray-600">
            Start Managing Your Contacts Today!
        </p>
        </div>
    </div>


  )
}

export default page
