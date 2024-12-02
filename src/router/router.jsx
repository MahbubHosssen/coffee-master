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
                loader: () => fetch('http://localhost:5000/data')
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
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/data/${params.id}`)
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