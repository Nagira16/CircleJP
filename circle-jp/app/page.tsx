import { createSupabaseServer } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = await createSupabaseServer();
  const user = await supabase.auth.getUser();

  console.log("user:", user);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href={"/auth/sign-in"}>sign</Link>{" "}
    </div>
  );
}
