import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http'
import {AuthContext} from '../context/auth'
import {SignUpForm} from "../components/users/signupForm";

export const SignUpPage = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

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
        <SignUpForm onSubmit={signUpHandler} defaultValues={defaultValues}/>
    )
}