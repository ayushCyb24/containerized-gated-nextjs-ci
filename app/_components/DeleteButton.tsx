"use client";

import { FiTrash2 } from "react-icons/fi";
import { ContactType } from "../_types/contact";
import { useActionState } from "react";

type ActionState = {
  success?: boolean;
  error?: string;
};

type DeleteButtonProps = {
  action: (
    prevState: ActionState | null,
    formData: FormData
  ) => Promise<ActionState>;
  contact: ContactType;
};

const DeleteButton = ({action, contact }: DeleteButtonProps) => {
    const[state, formAction]=useActionState(action, null);
    return <form action={formAction} >
        <input type="hidden" name="id" value={contact?.id} />
        <button type="submit" className="flex items-center gap-1 text-red-500 border border-red-400 rounded-md px-2 py-1.5 hover:bg-red-100 cursor-pointer"
            onClick={(e)=>{
                if(!confirm(`Are you sure you want to delete ${contact.name}?`))
                    e.preventDefault();
            }}>
        <FiTrash2 className="text-red-500 text-lg"/>Delete
        </button>
    </form>
}
export default DeleteButton;
