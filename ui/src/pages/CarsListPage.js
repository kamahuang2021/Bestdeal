import axios from "axios";
import React, {useEffect, useState} from "react";
import {CarsList} from "../components/cars/CarsList";
import {useHttp} from "../hooks/http";

export const CarsListPage = () => {
    const {loading, request, error, clearError} = useHttp()
    // const fetchCars = async () => {
    //     const response = await axios.get('http://localhost:3000/cars');
    //     setCars(response.data);
    // };

    const fetchCars = async () => {
        try {
            const response = await request('/cars', 'GET').catch(
                error => console.log(error)
            )
            setCars(response.data);
        } catch (e) {
            console.log(e)
        }
    }

    const [cars, setCars] = useState([]);
    useEffect(() => {
       fetchCars().catch(error => console.log(error))
    }, [])

    return cars ? <CarsList cars={cars}/> : <div>Loading...</div>
};