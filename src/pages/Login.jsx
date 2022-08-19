import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]= useState("");
  const navigate= useNavigate();

  const handleSubmit=()=>{
    if(email && password !== ""){
      navigate('/');
    }else{
      alert("Please Login first")
    }
  }
  return (
    <div className='w-full h-full object-co'>
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    <div className="w-full fixed px-5 py-24 z-50">
      <div className="max-w-[450px] h-[600px] mx-auto bg-white ">
        <div className="max-w-[320px] mx-auto py-16">
          <h1 className="text-3xl font-bold">Sign In</h1>
     <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
            <input
             onChange={(e) => setEmail(e.target.value)}
              className="p-3 my-2 bg-white border border-gray-200 rounded"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
             onChange={(e) => setPassword(e.target.value)}
              className="p-3 my-2 bg-white border border-gray-200 rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="bg-orange-400 py-3 my-6 rounded font-bold">
              Sign In
            </button>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <p>
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="py-8">
              <span className="text-gray-600">
               New Customer?
              </span>
              <Link to="/signup"> Sign Up</Link>
            </p>
          </form>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Login