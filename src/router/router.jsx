import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import AddCoffee from "../Pages/AddCoffee";

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