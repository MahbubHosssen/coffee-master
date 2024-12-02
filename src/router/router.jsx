import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Users from "../Pages/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://coffee-server-eight-iota.vercel.app/data')
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('https://coffee-server-eight-iota.vercel.app/users')
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`https://coffee-server-eight-iota.vercel.app/data/${params.id}`)
            },
            {
                path: '/details',
                element: <Details></Details>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            }
        ]
    }
])

export default router;