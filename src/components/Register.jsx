import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client/react";
import {USER_ADD} from "../queries/Query.jsx";

const Register = () => {
    const navigate = useNavigate();
    const [userAdd, {data, error}] = useMutation(USER_ADD, {
        onCompleted: () => {
            navigate("/login");
        }
    });

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(form.name === "" || form.username === "" || form.email === "" || form.password === "" || form.password_confirmation === "") {
                return alert("Please enter a valid data");
            }
            if(form.password !== form.password_confirmation) {
                return alert("Passwords don't match");
            }
            await userAdd({
                variables: {
                    name: form.name,
                    username: form.username,
                    email: form.email,
                    password: form.password,
                }
            });
            setForm({
                name: "",
                username: "",
                email: "",
                password: "",
                password_confirmation: "",
            });
        } catch (error) {
            console.log("Error in adding user: ",error.message);
        }
    }

    return (
        <div className="">
            <section className="flex flex-col items-center justify-center p-5 h-full">
                <h3 className="font-bold text-xl m-2 italic">Register</h3>
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                    <input
                        className="px-5 py-2 m-2 bg-white border border-gray-500 rounded-full"
                        type="text"
                        placeholder="Name"
                        onChange={handleChange}
                        name="name"
                    />
                    <input
                        className="px-5 py-2 m-2 bg-white border border-gray-500 rounded-full"
                        type="text"
                        placeholder="Username"
                        onChange={handleChange}
                        name="username"
                    />
                    <input
                        className="px-5 py-2 m-2 bg-white border border-gray-500 rounded-full"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                    />
                    <input
                        className="px-5 py-2 m-2 bg-white border border-gray-500 rounded-full"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                    />
                    <input
                        className="px-5 py-2 m-2 bg-white border border-gray-500 rounded-full"
                        type="password"
                        placeholder="Re-enter Password"
                        onChange={handleChange}
                        name="password_confirmation"
                    />

                    <button className="px-5 py-2 m-2  border bg-gray-500 active:bg-gray-800 text-white font-bold rounded-full">Be Membered</button>
                </form>
                <p className="text-center font-bold">Already a member? Then <Link to="/login" className="text-sky-800">get in here</Link> </p>
            </section>
        </div>
    )
}
export default Register
