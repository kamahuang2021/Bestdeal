import React, {useState} from "react";
import {useHttp} from "../hooks/http";
import {SignUpForm} from "../components/users/signupForm";

export const SignUpPage = () => {
  const {request} = useHttp();
  const [form, setForm] = useState({
    email: "", password: "", full_name: "", confirm_password: ""
  });

  const signUpHandler = async () => {
    try {
      const data = await request("http://localhost:5000/users/register", "POST", {...form});
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const defaultValues = {email: "", password: "", confirm_password: "", full_name: ""};
  return (
    <SignUpForm title="Sign Up" onSubmit={signUpHandler} defaultValues={defaultValues} setForm={setForm} form={form}/>
  );
};