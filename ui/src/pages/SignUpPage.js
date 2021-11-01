import React, {useContext, useEffect, useRef, useState} from 'react'
import {useHttp} from '../hooks/http'
import {AuthContext} from '../context/auth'
import {SignUpForm} from "../components/users/signupForm";
import {useForm} from "react-hook-form";

export const SignUpPage = () => {
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: '', full_name: '', confirm_password: ''
    })
    // const [email, setEmail] = useState('')

    const signUpHandler = async () => {
        try {
            const data = await request('http://localhost:5000/users/register', 'POST', {...form})
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    const defaultValues = {email: "", password: "", confirm_password: "", full_name: ""}
    return (
        <SignUpForm title="Sign Up" onSubmit={signUpHandler} defaultValues={defaultValues} setForm={setForm} form={form}/>
    )
}