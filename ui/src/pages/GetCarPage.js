import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http'
import {AuthContext} from '../context/auth'
import {AddCarForm} from "../components/seller/AddCarForm";
import axios from "axios";

export const EditCarPage = (props) => {
    const {loading, request, error, clearError} = useHttp()
    const [car, setCar] = useState({})

    const getCar = async () => {
        const response = await request('http://localhost:3000/cars/' + this.props.id, 'GET', null);
        setCar(response.data);
    };
    useEffect(() => {
        getCar().catch(error => console.log(error))
    }, [])


    return (
        <CarDisplay car={car} />
    )
}