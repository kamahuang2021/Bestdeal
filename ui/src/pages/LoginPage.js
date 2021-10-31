import React, {useContext, useState} from 'react'
import {useHttp} from '../hooks/http'
import {AuthContext} from '../context/auth'
import {LoginForm} from "../components/users/loginForm";

export const LoginPage = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    const loginHandler = async () => {
        try {
            const data = await request('/users/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
        }
    }

    return (
        <LoginForm onSubmit={loginHandler}/>
    )
}