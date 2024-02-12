"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-pink-700">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-pink-700"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-pink-700 placeholder-pink-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-pink-700"
                >
                  Password
                </label>
                <div className="text-sm">
                  <div
                    onClick={() => router.push("/forgot-password")}
                    className="cursor-pointer font-semibold text-pink-400 hover:text-pink-300"
                  >
                    Forgot password?
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-pink-700 placeholder-pink-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() =>
                  signIn("credentials", {
                    email,
                    password,
                    redirect: true,
                    callbackUrl: "/",
                  })
                }
                disabled={!email || !password}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
              >
                Sign in
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            Not a member?{" "}
            <button
              onClick={() => router.push("signup")}
              className="font-semibold leading-6 text-pink-400 hover:text-pink-300"
            >
              Sign Up
            </button>
          </p>
          <div className="space-y-6 w-full text-center">
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="flex items-center bg-red-500 px-3 py-1.5 text-sm font-semibold text-white rounded-md hover:bg-red-600"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Sign in with
              Google
            </button>

            <button
              onClick={() => signIn("twitter", { callbackUrl: "/" })}
              className="flex items-center bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white rounded-md hover:bg-blue-600"
            >
              <FontAwesomeIcon icon={faTwitter} className="mr-2" /> Sign in with
              Twitter
            </button>

            <button
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="flex items-center bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white rounded-md hover:bg-gray-900"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> Sign in with
              GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
