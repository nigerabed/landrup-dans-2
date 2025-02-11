"use server";
import { cookies } from "next/headers";
import { z } from "zod";

export async function userLoginAction(state, formData) {
  const { username, password } = Object.fromEntries(formData);
  const cookieStore = await cookies();

  const schema = z.object({
    username: z.string().min(1, { message: "This fiels is requred" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters long" }),
  });

  const result = schema.safeParse({ username, password });

  if (!result.success) return result.error.format();

  try {
    const response = await fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    cookieStore.set("landrup_token", data.token);
    cookieStore.set("landrup_userid", data.userId);
    cookieStore.set("landrup_role", data.role);
    return { success: true };
    
  } catch (error) {
    throw new Error(error);
  }
}
