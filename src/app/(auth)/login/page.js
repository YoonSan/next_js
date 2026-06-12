"use client";

import Link from "next/link";
import SocialLogins from "../_components/SocialLogins";
import { REGISTER_ROUTE } from "@/constants/routes";
import { useForm } from "react-hook-form";
import { login } from "@/api/auth";
import PasswordInput from "@/components/PasswordInput";
import useAuthStore from "@/stores/authStore";
import { useState } from "react";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  //state save with zustand
  const{ loginUser} = useAuthStore.getState();
  
  //loading handle
  const [loading, setLoading] = useState(false);

  // function submitForm(data) {
  //   setLoading(true);
  //   //console.log(data);
  //   login(data)
  //    // .then((res) => console.log(res))
  //     .then((response) => loginUser({user : response.data}))
  //     .catch((error) => {
  //       console.log(error);

  //       toast.error(error.response.data);
  //     })
  //     .finally(() => setLoading(false));
  // }

    function submitForm(data) {
    setLoading(true);

    login(data)
      .then((response) => {
        loginUser({ user: response.data });
        toast.success("Login Successfull");
    })

      .catch((error) => {
        console.error(error);
        // Use optional chaining and a fallback string
        const errorMessage = error.response?.data || error.message || "An unexpected error occurred";
        toast.error(errorMessage);
      })

      .finally(() => setLoading(false));
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-center py-10 md:py-20">
        <div className="w-full rounded-lg dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <SocialLogins />
            <form
              onSubmit={handleSubmit(submitForm)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  {...register("email")}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
               <PasswordInput id = "password" {...register("password")} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="relative w-full text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-85"
              disabled={loading}
              >
                Sign in
                {loading && (
                  <Spinner className = "absolute right-3 top-2 w-6! h-6!" />
                )}
                
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <Link
                  href={REGISTER_ROUTE}
                  className="font-medium text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;