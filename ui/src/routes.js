import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
// import {LinksPage} from './pages/LinksPage'
// import {CreatePage} from './pages/CreatePage'
// import {DetailPage} from './pages/DetailPage'
import {LoginPage} from './pages/LoginPage'
import {CarsListPage} from "./pages/CarsListPage";
import {SignUpPage} from "./pages/SignUpPage";
import {AddCarPage} from "./pages/AddCarPage";
import {EditCarPage} from "./pages/EditCarPage";
import {EditUserPage} from "./pages/EditUserPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/cars/new" exact>
                    <AddCarPage />
                </Route>
                <Route path="/cars/:id/edit" exact>
                    <EditCarPage />
                </Route>
                <Route path="/cars" exact>
                    <CarsListPage />
                </Route>
                <Route path="/users/:id/edit" exact>
                   <EditUserPage />
                </Route>

                {/*<Route path="/links" exact>*/}
                {/*    <LinksPage />*/}
                {/*</Route>*/}
                {/*<Route path="/create" exact>*/}
                {/*    <CreatePage />*/}
                {/*</Route>*/}
                {/*<Route path="/detail/:id">*/}
                {/*    <DetailPage />*/}
                {/*</Route>*/}
                {/*<Redirect to="/create" />*/}
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <LoginPage />
            </Route>
            <Route path="/signup" exact>
                <SignUpPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}