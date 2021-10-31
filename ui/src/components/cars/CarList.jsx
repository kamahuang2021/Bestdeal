import React, {useEffect, useState} from "react";
import {CarsList} from "./CarsList";
import axios from "axios";


export const CarList = (props) => {
    const fetchCars = async () => {
        const response = await axios.get('http://localhost:3000/cars');
        setCars(response.data);
    };
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetchCars().catch(error => console.log(error))
    }, [cars])


    return (
        <div>
            <CarsList cars={cars}/>
        </div>
    );
}