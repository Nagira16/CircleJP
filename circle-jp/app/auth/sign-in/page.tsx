import Image from "next/image";
import Link from "next/link";

function SignIn() {
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
          action=""
          className="mx-auto w-[400px] h-60 flex flex-col justify-between"
        >
          <div className="space-y-3">
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
          </div>

          <div className="flex justify-between items-center pt-[94px] text-[17px] text-center">
            <Link
              href={"/auth/sign-up"}
              className="bg-white text-black py-1 rounded-2xl w-20"
            >
              Sign Up
            </Link>
            <button type="submit" className="bg-blue-500 py-1 rounded-2xl w-20">
              Sign In
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignIn;
