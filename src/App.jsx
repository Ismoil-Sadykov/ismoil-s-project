import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Info from "./pages/Info"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/catalog",
                    element: <Catalog />
                },
                {
                    path: "/info/:id",
                    element: <Info />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}
