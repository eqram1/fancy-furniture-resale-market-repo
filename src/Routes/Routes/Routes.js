import { createBrowserRouter, Router } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import Order from "../../Pages/Home/Order/Order";
import Login from "../../Pages/Login/Login";
import Logout from "../../Pages/Logout/Logout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/logout',
                element: <Logout></Logout>
            }
        ]
    }
])

export default router;