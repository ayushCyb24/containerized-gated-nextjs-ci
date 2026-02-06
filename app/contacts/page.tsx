import React from 'react'
import { getSession } from '../_lib/session'
import { getContact, getContactById } from '../api/contact';
import ContactList from '../_components/ContactList';

const ContactPage = async () => {
  const user = await getSession()
  if(!user){
  return (
    <div>
      Please {" "}
         <a href="/login" className="text-blue-600 hover:underline">log in</a>{" "} to view contacts.
    </div>
  );
}
const contacts= await getContact(user.id)
if(!contacts || contacts.length === 0){
   return (
    <div>
      <h1>No Contacts Found</h1>
      Please <a href="/contacts/new" className="text-blue-600 hover:underline">Add a new Contact
      </a>{" "} to your contact list.
    </div>
  );
} 
return <div>
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-semibold">Your Contacts</h1>
    <a href="/contacts/new" 
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Add New Contact</a>
  </div>
   <ContactList contacts={contacts} />
</div>
};
export default ContactPage;
