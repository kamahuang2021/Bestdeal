import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http'
import {AddCarForm} from "../components/cars/AddCarForm";
import axios from "axios";
import {AuthContext} from "../context/auth";
// import {UserDisplay} from "../components/users/user";

export const GetUserPage = (props) => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [user, setUser] = useState({})

    const getUser = async () => {
        const response = await request('http://localhost:5000/users/' + auth.userId, 'GET', null, {
            Authorization: `Bearer ${auth.token}`
        });
        setUser(response.data);
    };
    useEffect(() => {
        getUser().catch(error => console.log(error))
    }, [])


    return (
        <div>

        </div>
        // <UserDisplay user={user}/>
    )
}