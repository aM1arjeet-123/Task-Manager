import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
 import api from "../api/axios"

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const navigate = useNavigate();

    const handleSignup = async (e)=>{
        e.preventDefault();
        await api.post("/auth/signup", {name,email,password});
        navigate("/login");
    };
    return(
        <Layout>
            <form className="bg-white p-8 rounded-xl shadow-lg w-96" onSubmit={handleSignup}>
                <h2 className="text-2xl font-bold mb-6 text-center"> Signup</h2>

                <input
                    className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Name"
                    onChange={(e)=>setName(e.target.value)}/>

                <input
                    className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}/>

                <input 
                    type="password"
                    className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                    Signup
                </button>

                <p className="text-center mt-4 text-sm">
                    Already have an account?
                    <Link to="/login" className="text-indigo-600 ml-1">Login</Link>
                </p>
            </form>
        </Layout>
    )
}