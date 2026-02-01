import { Link } from "react-router-dom";
import Layout from "../Components/Layout";


export default function Home(){
    return(
        <Layout>
            <div className="bg-white p-10 rounded-xl shadow-lg text-center w-96">
                <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
                <p className="mb-6 text-grey-600">
                    Manage your daily tasks securely 
                </p>
                <div className="flex gap-4 justify-center">
                    <Link
                        to="/login"
                        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
                                Signup
                            </Link>
                </div>

            </div>
        </Layout>
    )
}