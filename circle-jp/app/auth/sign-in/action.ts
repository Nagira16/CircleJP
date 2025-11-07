"use server";

import { createSupabaseServer } from "@/utils/supabase/server";

type ActionState = {
  success: boolean;
  error?: string;
};

export const signIn = async (
  prev: ActionState,
  formData?: FormData
): Promise<ActionState> => {
  let email = formData!.get("email") as string;
  let password = formData!.get("password") as string;

  email = email.trim();
  password = password.trim();

  const supabase = await createSupabaseServer();
  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (authError || !authData.user) {
    return { success: false, error: authError?.message || "Sign In Failed" };
  }

  return { success: true };
};
