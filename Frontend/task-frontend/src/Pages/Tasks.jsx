import { useEffect, useState } from "react";
import api from "../api/axios";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";


export default function Tasks(){
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const loadTasks = async ()=>{
        const res = await api.get("/tasks");
        setTasks(res.data);
    };

    useEffect(()=>{
        loadTasks();
    },[]);

    const addTask = async ()=>{
        if(!title.trim()) return;
        await api.post("/tasks",{title, description, completed:false,});
        setTitle("");
        setDescription("");
        loadTasks();

    }

    const  toggleComplete = async (task)=>{
        await api.put(`/tasks/${task.id}`,{
            title:task.title,
            description:task.description,
            completed:!task.completed,
        });
        loadTasks();
    }

    const deleteTask = async(id)=>{
        await api.delete(`/tasks/${id}`);
        loadTasks();
    }

    const pendingTasks = tasks.filter((t)=>!t.completed);
    const completedTasks = tasks.filter((t)=>t.completed);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        My Tasks
                    </h2>

                    <button className="text-sm text-red-600" onClick={()=>{
                        localStorage.removeItem("token");
                        window.location.href = "/login"
                    }}>
                        Logout
                    </button>
                </div>

                {/* Add Task */}
                <div className="space-y-3 mb-6">
                    <input 
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
                        placeholder="Task title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        />

                        <textarea
                        className="w-full p-2 border rounded focus:ring-3 focus:ring-indigo-500"
                        placeholder="Task Description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                        <button
                        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                        onClick={addTask}
                        >
                            Add Task
                        </button>
                </div>
                {/* Pending Tasks */}
                <h3 className="text-lg font-semibold mb-2">Pending Task</h3>
                {pendingTasks.length === 0 && (
                    <p className="text-gray-400 mb-4">No Pending Tasks</p>
                )}
                <ul className="mb-6">
                    {pendingTasks.map((task)=>(
                        <li key={task.id}
                        className="flex justify-between items-start border-b py-3">
                            <div>
                                <p className="font-medium">{task.title}</p>
                                <p className="text-sm text-gray-500">{task.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-green-600 text-sm "
                                onClick={()=>toggleComplete(task)}
                                ><MdOutlinePendingActions />Pending</button>
                                <button className="text-red-500 text-sm" onClick={()=>deleteTask(task.id)}
                                ><MdDelete />Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Completed Tasks */}
                <h3 className="text-lg font-semibold mb-2">Completed</h3>
                {completedTasks.length === 0 && (
                    <p className="text-gray-400">No Completed Tasks</p>
                )}
                <ul>
                    {completedTasks.map((task)=>(
                        <li key={task.id}
                        className="flex justify-between items-start border-bb py-3 opacity-60">
                            <div >
                                <p className="line-through font-medium">{task.title}</p>
                                <p className="text-sm text-gray-500 line-through">
                                    {task.description}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-yellow-600 text-sm" onClick={()=> toggleComplete(task)}><IoIosRefresh />Retry</button>
                                <button className="text-red-500 text-sm" onClick={()=>deleteTask(task.id)}><MdDelete />Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )


}