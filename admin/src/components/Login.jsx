import React, { useState } from 'react';
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
const Login = ({setToken}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const onSubmitHandler = async (e)=>{
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+'/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.token)
            }
            else{
                toast.error(response.data.message);
            }
            
            

        } catch (error) {
            toast.error(response.error.message);
            
        }
    }
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-neutral-900 p-8 rounded-xl shadow-lg w-96 border border-neutral-800">
        {/* Title */}
        <h1 className="text-white text-3xl font-bold text-center mb-6">Admin Panel</h1>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="space-y-4">
          {/* Email Input */}
          <div>
            <p className="text-neutral-400 mb-1">Email Address</p>
            <input
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
              type="email"
              placeholder="admin@example.com"
              className="w-full p-3 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-white shadow-sm"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <p className="text-neutral-400 mb-1">Password</p>
            <input
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-white shadow-sm"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-white hover:bg-neutral-300 text-black font-semibold p-3 rounded-md shadow-md transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
