import Image from "next/image";
import Link from "next/link";

function SignUp() {
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

        <form action="" className="mx-auto space-y-3 w-[400px]">
          <div>
            <legend>username</legend>
            <input
              type="text"
              name="username"
              className="border w-[400px] rounded-xl"
            />
          </div>

          <div>
            <legend>Email</legend>
            <input
              type="email"
              name="email"
              className="border w-[400px] rounded-xl"
            />
          </div>

          <div>
            <legend>Password</legend>
            <input
              type="password"
              name="password"
              className="border w-[400px] rounded-xl"
            />
          </div>

          <div className="flex justify-between items-center pt-5 text-[16px]">
            <Link
              href={"/auth/sign-in"}
              className="bg-white text-black py-1 px-2 rounded-2xl"
            >
              Sign In
            </Link>
            <button type="submit" className="bg-blue-500 py-1 px-2 rounded-2xl">
              Sign Up
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
