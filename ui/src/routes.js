import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LoginPage} from './pages/LoginPage'
import {CarsListPage} from "./pages/CarsListPage";
import {SignUpPage} from "./pages/SignUpPage";
import {AddCarPage} from "./pages/AddCarPage";
import {EditCarPage} from "./pages/EditCarPage";
import {GetCarPage} from "./pages/GetCarPage";
import {GetUserPage} from "./pages/GetUserPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/cars/new" exact>
                    <AddCarPage/>
                </Route>
                <Route path="/cars/edit" exact>
                    <EditCarPage/>
                </Route>
                <Route path="/cars" exact>
                    <CarsListPage/>
                </Route>
                <Route path="/cars/get" exact>
                    <GetCarPage/>
                </Route>
                <Route path="/users/:id" exact>
                    <GetUserPage/>
                </Route>
                <Route path="/users/logout" exact/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <LoginPage/>
            </Route>
            <Route path="/signup" exact>
                <SignUpPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}