import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {CarsList} from "../components/cars/CarsList";
import {useHttp} from "../hooks/http";
import {AuthContext} from "../context/auth";

export const CarsListPage = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()

    const fetchCars = async () => {
        try {
            const response = await request('http://localhost:5000/cars', 'GET', null, {
                Authorization: `Bearer ${auth.token}`
            }).catch(
                error => console.log(error)
            )
            setCars(response);
        } catch (e) {
            console.log(e)
        }
    }

    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetchCars().catch(error => console.log(error))
    }, [])

    return cars ?
        <CarsList cars={cars} /> :
        <div>Loading...</div>
};