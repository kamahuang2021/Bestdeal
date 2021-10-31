import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http'
import {AuthContext} from '../context/auth'
import {AddCarForm} from "../components/seller/AddCarForm";

export const AddCarPage = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })


    const addCarHandler = async () => {
        try {
            await request('/cars', 'POST', {...form}).catch(
                error => console.log(error)
            )
        } catch (e) {
            console.log(e)
        }
    }

    const defaultValues = {model: "", price: 0, size: 0, comment: ""}
    return (
        <AddCarForm onSubmit={addCarHandler} defaultValues={defaultValues}/>
    )
}