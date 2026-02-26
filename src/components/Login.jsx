import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {USER_LOGIN} from "../queries/Query.jsx";
import {useMutation} from "@apollo/client/react";

const Login = () => {
    const [userLogIn, {data, loading, error}] = useMutation(USER_LOGIN);

    const [formLI, setFormLI] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormLI({
            ...formLI,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formLI.email === "" || formLI.password !== "") {
                return alert("Please enter valid information");
            }
            await userLogIn({
                variables: {
                    email: formLI.email,
                    password: formLI.password,
                },
            });

            setFormLI({
                email: "",
                password: "",
            })
        } catch (error) {
            console.error("Login error: ", error.message);
        }
    };

    return (
        <div className="">
            <section className="flex flex-col items-center justify-center p-5 h-full">
                <h3 className="font-bold text-xl m-2 italic">Login</h3>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">

                    <input
                        className="px-5 py-2 m-2 bg-white border-1 border-gray-500 rounded-full"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />
                    <input
                        className="px-5 py-2 m-2 bg-white border-1 border-gray-500 rounded-full"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />


                    <button
                        className="px-5 py-2 m-2  border-1 bg-gray-500 active:bg-gray-800 text-white font-bold rounded-full"
                        type="submit"
                    >
                        Get in
                    </button>
                </form>
                <p className="text-center font-bold">Not a member? Then <Link to="/register" className="text-sky-800">become member here</Link></p>
            </section>


            <section>
                <div className="w-fit h-40 bg-orange-700">
                    {data?.userLogIn &&
                        <div>
                            <p>{data?.userLogIn.name}</p>
                            <p>@{data?.userLogIn.username}</p>
                            <p>{data?.userLogIn.email}</p>
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}
export default Login;
