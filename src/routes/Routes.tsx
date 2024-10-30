import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Home/Home"

const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default RouterProvider