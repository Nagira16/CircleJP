import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "./server";

export const Auth = async () => {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("AuthErorr", error);
    redirect("/login");
  }
  if (!user) {
    console.log("User Not Found");
    redirect("/login");
  }

  return user;
};
