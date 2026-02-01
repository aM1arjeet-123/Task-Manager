import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import api from "../api/axios"


export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e)=>{
        e.preventDefault();
        const res = await api.post("/auth/login", {email, password});
        localStorage.setItem("token",res.data.token);
        console.log("hjhksd")
        console.log(res)
        navigate("/tasks")
        
    }

    return(
        <Layout>
            <form className="bg-white p-8 rounded-xl shadow-lg w-96" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <input
                    className="w-full mb-4 p-2 border rounded  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                <input
                    className="w-full mb-4 p-2 border rounded  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                <button
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                    Login
                </button>
                <p className="text-center mt-4 text-sm">
                    Don't have an account?
                    <Link to="/signup" className="text-indigo-600 ml-1">Signup</Link>
                </p>
                

            </form>
        </Layout>
    )
}