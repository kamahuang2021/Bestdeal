import React, {useContext, useState} from "react";
import {useHttp} from "../hooks/http";
import {AuthContext} from "../context/auth";
import {LoginForm} from "../components/users/loginForm";

export const LoginPage = () => {
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [form, setForm] = useState({
    email: "", password: ""
  });

  const loginHandler = async () => {
    const data = await request("http://localhost:5000/users/login", "POST", {...form});
    console.log(data);
    auth.login(data.token, data.userId);
  };

  const defaultValues = {email: "", password: ""};
  return (
    <LoginForm onSubmit={loginHandler} defaultValues={defaultValues} setForm={setForm} form={form}/>
  );
};