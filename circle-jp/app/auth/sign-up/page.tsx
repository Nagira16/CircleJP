"use client";

import Image from "next/image";
import Link from "next/link";
import { signUp } from "./action";
import { useActionState, useEffect, useState } from "react";
import Swal from "sweetalert2";

type ActionState = {
  success: boolean;
  error?: string;
};

function SignUp() {
  const [state, fromAction, isPending] = useActionState<ActionState>(signUp, {
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      Swal.fire({
        title: "Registered!",
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
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
        <h4 className="text-center text-4xl">Sign Up</h4>

        <form
          action={fromAction}
          className="mx-auto w-[400px] h-60 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div>
              <legend>Username</legend>
              <input
                type="text"
                name="username"
                className="border w-[400px] rounded-2xl p-0.5"
                disabled={isPending}
                required
                minLength={3}
              />
            </div>

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
          </div>

          <div className="flex justify-between items-center pt-5 text-[17px] text-center">
            <Link
              href={"/auth/sign-in"}
              className="bg-white text-black py-1 rounded-2xl w-20 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300"
            >
              Sign In
            </Link>
            <button
              type="submit"
              className={`bg-blue-500 py-1 rounded-2xl w-20 hover:bg-blue-600 active:bg-blue-700 transition-colors duration-300${
                isPending && `animate-pulse`
              }`}
              disabled={isPending}
            >
              Sign Up
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
