import React, { useState } from "react";
import { ReactComponent as ReactLogo } from "../../assets/logo.svg";

const SignInPage: React.FC = () => {
  const [pageStatus, setPageStatus] = useState<boolean>(true);
  return (
    <div className="flex min-h-[840px] flex-1 flex-col justify-center">
      {/* <div className="flex flex-col justify-center flex-1 w-full max-w-sm min-h-full px-6 py-12 mx-auto lg:px-8"> */}
      <div className="max-w-sm flex flex-col justify-center mx-auto border border-purple rounded-md bg-slate-500 bg-opacity-10 p-7">
        <div className="flex justify-center">
          <ReactLogo className="w-96 h-96" />
        </div>
        <form className="flex flex-col gap-y-4" action="#" method="POST">
          <div>
            <label className="text-sm text-gray-900">Email address</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border border-slate-300  py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-purple"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <label className="text-gray-900 text-md">Password</label>
              {pageStatus && (
                <label className="text-sm text-indigo-600">
                  Forget Password
                </label>
              )}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                className="w-full p-2 text-gray-900 border rounded-md border-slate-300 placeholder:text-gray-400 focus:outline-purple sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {!pageStatus && (
            <div>
              <label className="text-gray-900 text-md">Check Password</label>
              <div className="mt-2">
                <input
                  id="rePassword"
                  name="rePassword"
                  type="rePassword"
                  className="w-full p-2 text-gray-900 border rounded-md border-slate-300 placeholder:text-gray-400 focus:outline-purple sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
          <div>
            <button className="flex justify-center w-full p-2 text-sm font-semibold leading-6 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {pageStatus ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>
        <div className="sm:flex justify-between w-full mt-2">
          <p className="">Not a member? </p>
          <button
            onClick={() => {
              setPageStatus((prev) => !prev);
            }}
            className=" text-purple"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
