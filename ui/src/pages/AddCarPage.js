import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http'
import {AuthContext} from '../context/auth'
import {AddCarForm} from "../components/cars/AddCarForm";

export const AddCarPage = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        model: "", price: 0, size: 0, comment: "", bought_time: Date.now()
    })

    const addCarHandler = async () => {
        try {
            await request('http://localhost:5000/cars', 'POST', {...form}, {
                Authorization: `Bearer ${auth.token}`
            }).catch(
                error => console.log(error)
            )
        } catch (e) {
            console.log(e)
        }
    }

    const defaultValues = {model: "", price: 0, size: 1, comment: "", bought_time: Date.now()}
    return (
        <AddCarForm title="Add your car information to sell" onSubmit={addCarHandler} defaultValues={defaultValues} setForm={setForm} form={form}/>
    )
}