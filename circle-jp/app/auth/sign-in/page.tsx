"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import Swal from "sweetalert2";
import { signIn } from "./action";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

type ActionState = {
  success: boolean;
  error?: string;
};

function SignIn() {
  const router: AppRouterInstance = useRouter();
  const [state, fromAction, isPending] = useActionState<ActionState>(signIn, {
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      Swal.fire({
        title: "Signed In!",
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      router.back();
    }
    if (state.error) {
      Swal.fire({
        title: state.error,
        icon: "error",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  }, [state.success, state.error]);

  return (
    <div className="grid min-h-screen place-items-center">
      <Image
        src={"/images/JPCA.jpeg"}
        alt="BackGround"
        fill
        className="z-0 blur-md"
      />
      <main className="border border-inherit w-[600px] h-[370px] rounded-2xl p-6 z-10 backdrop-blur-xl space-y-10">
        <h4 className="text-center text-4xl">Sign In</h4>

        <form
          action={fromAction}
          className="mx-auto w-[400px] h-60 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div>
              <legend>Email</legend>
              <input
                type="email"
                name="email"
                className="border w-[400px] rounded-2xl p-0.5"
                disabled={isPending}
                required
              />
            </div>

            <div>
              <legend>Password</legend>
              <input
                type="password"
                name="password"
                className="border w-[400px] rounded-2xl p-0.5"
                disabled={isPending}
                required
                minLength={6}
              />
            </div>
            <div className="text-center">
              <Link
                href={"/auth/forgot-password"}
                className="text-sm underline hover:text-gray-300 active:text-gray-400 transition-colors duration-300"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center pt-[50px] text-[17px] text-center">
            <Link
              href={"/auth/sign-up"}
              className="bg-white text-black py-1 rounded-2xl w-20 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300"
            >
              Sign Up
            </Link>
            <button
              type="submit"
              className={`bg-blue-500 py-1 rounded-2xl w-20 hover:bg-blue-600 active:bg-blue-700 transition-colors duration-300${
                isPending && `animate-pulse`
              }`}
              disabled={isPending}
            >
              Sign In
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignIn;
