import React from 'react'
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import {Routes, Route} from "react-router-dom";

const Layout = () => {

    return (
        <div className="h-svh w-full bg-linear-to-b from-sky-50 to-sky-300 font-mono fixed overflow-auto">
            <section>
                <p className="font-bold text-3xl text-center pt-10 p-5 text-sky-500 ">
                    Animgel
                </p>
            </section>
            <section>
                <Routes >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </section>

        </div>
    )
}
export default Layout
