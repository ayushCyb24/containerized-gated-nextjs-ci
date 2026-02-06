"use server"
import { revalidatePath } from "next/cache";
import { createContact,updateContact, deleteContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const createContactAction = async (
    prevState: any, 
    formData: FormData) => {
      if(!formData){
        return {error: "Form data is missing"};
      }
      const user =await getSession();

      const newContact: ContactType={
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: user?.id
      } as ContactType;  
     
      try { 
        await createContact(newContact);
        revalidatePath("/contacts");
        return { success: true };
      } catch (error) {
        console.log("Error creating contact:", error);
        return { error: "Failed to create contact" };
      }
}

export const updateContactAction = async (
    prevState: any,
     formData: FormData) => {
     if(!formData){
        return {error: "Form data is missing"};
      }
      const id= formData.get("id") as string;
      const user =await getSession();

      const updatedContact: ContactType={
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: user?.id
      } as ContactType;  
     
      try { 
        await updateContact (id,updatedContact);
        revalidatePath("/contacts");
        return { success: true };
      } catch (error) {
        console.log("Error updating contact:", error);
        return { error: "Failed to update contact" };
      }
}

export const deleteContactAction = async (prevState: any, formData: FormData) => {

    const id= formData.get("id") as string;
    try {
        await deleteContact(id);
        revalidatePath("/contacts");
        return { success: true };
    } catch (error) {
        console.log("Error deleting contact:", error);
        return { error: "Failed to delete contact" };
    }
}
