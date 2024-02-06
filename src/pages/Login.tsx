import React, { useState } from "react";
import { toast } from "react-toastify";

import AppLayout from "../layouts/AppLayout";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // show error if email matches email regex
    if (!emailRegex.test(email)) return toast.error("Email is not valid!");

    // show error if password less than 8 characters
    if (password.length < 8)
      return toast.error("Password must contain at least 8 characters!");

    return toast.success("Validation successful!")
  };

  return (
    <AppLayout>
      <div className="flex justify-center items-center h-full">
        <form
          className="bg-white rounded-lg p-6 w-full max-w-[30rem]"
          onSubmit={handleSubmit}
        >
          <Input label="Email" value={email} setValue={setEmail} type="text" />
          <Input
            label="Password"
            value={password}
            setValue={setPassword}
            type="password"
          />
          <button className="mt-6 p-3 bg-slate-700 text-white font-bold w-full flex justify-center items-center rounded">
            Submit
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default Login;
