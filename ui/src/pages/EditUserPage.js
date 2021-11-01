import React, {useContext, useState} from "react";
import {useHttp} from "../hooks/http";
import {AuthContext} from "../context/auth";
import {SignUpForm} from "../components/users/signupForm";

export const EditUserPage = () => {
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [form, setForm] = useState({
    email: "", password: ""
  });

  const editUserHandler = async () => {
    await request("/users/" + auth.userId + "/edit", "PUT", {...form});
  };

  const defaultValues = {email: "", password: "", confirm_password: "", full_name: ""};
  return (
    <SignUpForm onSubmit={editUserHandler} defaultValues={defaultValues} setForm={setForm} form={form}/>
  );
};
