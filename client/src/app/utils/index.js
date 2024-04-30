'use server'
import { signIn, signOut } from "../auth";


export const handleSignOut = async () => {
    await signOut()
}

const authenticate = async (data) => {
    const { email, password } = data
  
    try {
      await signIn("credentials", { email, password, redirectTo: '/inventory' });
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
      throw err;
    }
};

export {authenticate}