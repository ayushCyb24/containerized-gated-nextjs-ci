"use client"
import React, { useActionState, useEffect } from 'react'
import { ContactType } from '../_types/contact';
import { useRouter } from 'next/dist/client/components/navigation';
type ActionState = {
  success?: boolean;
  error?: string;
};

type ContactFormProps = {
    action: (
    prevState: ActionState | null,
    formData: FormData
  ) => Promise<ActionState>;
  contact?: ContactType;
}

const ContactForm = ({action, contact}: ContactFormProps) => {
    const Router = useRouter();
    const [state, formAction] = useActionState(action, null);

    useEffect(() => {
        if(state?.success){
            Router.push("/contacts");
            alert("Contact saved successfully!");
        }
    });
  return (
   <form action={formAction} className="space-x-4 gap-4 flex flex-col">
     <input type="hidden" name="id" value={contact?.id} />
       <div>
           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
            </label>
           <input 
           type="text" 
           name="name" 
            defaultValue={contact?.name || ""}
           placeholder="Enter your name" 
           required 
           className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm
            focus:ring-blue-500 focus:border-blue-500" />
       </div>
       <div>
           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email</label>
           <input 
           type="email" 
           name="email" 
           defaultValue={contact?.email || ""} 
           placeholder="Enter your email"  
           required
           className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm
            focus:ring-blue-500 focus:border-blue-500" />
       </div>
       <div>
           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Phone Number</label>
           <input 
           type="text" 
           name="phone" 
           defaultValue={contact?.phone || ""} 
           placeholder="Enter your phone number"  
           required
           className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm
            focus:ring-blue-500 focus:border-blue-500" />
       </div>

       {state?.error &&(
        <div className="text-red-500 text-sm">
            {state.error}
        </div>
       )}
       <button 
       type="submit"   
       className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue -600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer">
        Save Contact
       </button>
      </form>
  )
}

export default ContactForm
