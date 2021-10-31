import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http'
import {AuthContext} from '../context/auth'
import {AddCarForm} from "../components/seller/AddCarForm";
import axios from "axios";

export const EditCarPage = (props) => {
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const [car, setCar] = useState({})

    const getCar = async () => {
        const response = await request('http://localhost:5000/cars/' + this.props.id, 'GET', null);
        setCar(response.data);
    };
    useEffect(() => {
        getCar().catch(error => console.log(error))
    }, [])


    const editCarHandler = async () => {
        try {
            await request('/cars/' + this.props.id, 'PUT', {...form}).catch(
                error => console.log(error)
            )
        } catch (e) {
            console.log(e)
        }
    }

    const defaultValues = {model: "", price: 0, size: 0, comment: ""}
    return (
        <AddCarForm onSubmit={editCarHandler} defaultValues={defaultValues}/>
    )
}