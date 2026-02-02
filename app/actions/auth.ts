"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { setSession, deleteSession } from "../_lib/session";
import { UserType } from "../_types/user";

const API_URL = "http://localhost:3001"; // json-server

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await axios.get(
    `${API_URL}/users?email=${email}&password=${password}`
  );

  const user: UserType | undefined = response.data[0];

  if (!user) {
    throw new Error("Invalid credentials");
  }

  
  await setSession(user);

  redirect("/contacts");
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
