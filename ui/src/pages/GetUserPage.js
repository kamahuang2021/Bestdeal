import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http'
import {AddCarForm} from "../components/seller/AddCarForm";
import axios from "axios";
import {AuthContext} from "../context/auth";
import {UserDisplay} from "../components/users/user";

export const EditCarPage = (props) => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [user, setUser] = useState({})

    const getUser = async () => {
        const response = await request('http://localhost:3000/users/' + auth.userId, 'GET', null);
        setUser(response.data);
    };
    useEffect(() => {
        getUser().catch(error => console.log(error))
    }, [])


    return (
        <UserDisplay user={user} />
    )
}