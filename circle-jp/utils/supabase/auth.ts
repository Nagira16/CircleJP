import { redirect } from "next/navigation";
import { createSupabaseServer } from "./server";

export const Auth = async () => {
  const supabase = await createSupabaseServer();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    redirect("/auth/sign-in");
  }
  if (!user) {
    redirect("/auth/sign-in");
  }

  return user;
};
