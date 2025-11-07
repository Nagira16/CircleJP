"use server";

import { createSupabaseServer } from "@/utils/supabase/server";

type ActionState = {
  success: boolean;
  error?: string;
};

export const signUp = async (
  prev: ActionState,
  formData?: FormData
): Promise<ActionState> => {
  let username = formData!.get("username") as string;
  let email = formData!.get("email") as string;
  let password = formData!.get("password") as string;

  username = username.trim();
  email = email.trim();
  password = password.trim();

  const supabase = await createSupabaseServer();
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (authError || !authData.user) {
    return { success: false, error: authError?.message || "Sign Up Failed" };
  }

  const { data: userData, error: userError } = await supabase
    .from("User")
    .insert({
      auth_id: authData.user.id,
      username,
      email,
      avaterUrl: `https://ui-avatars.com/api/?name=${username}`,
    })
    .select();

  if (userError) {
    return { success: false, error: userError.message };
  }

  return { success: true };
};
