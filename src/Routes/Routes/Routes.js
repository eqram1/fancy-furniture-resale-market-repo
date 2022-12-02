import { createBrowserRouter, Router } from "react-router-dom"
import Main from "../../Layout/Main"
import About from "../../Pages/Home/About/About";
import Blog from "../../Pages/Home/Blog/Blog";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home"
import Order from "../../Pages/Home/Order/Order";
import Reviews from "../../Pages/Home/Reviews/Reviews";
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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