import { Link } from "react-router-dom"
import "./register.scss"
import { useState } from "react"
import axios from "axios"

const Register = ()=>{

    const [inputs,setInputs]=useState({
        username:"",
        emial:"",
        password:"",
        name:"",
    });

    const [err,setErr]=useState(null);

    const handleChange=(e)=>{
        setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleClick=async(e)=>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8800/api/auth/register",inputs)
        }catch(err){
            setErr(err.response.data);
        }
    }

    console.log(err);

    console.log(inputs)
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Lol World.</h1>
                    <p>
                        This is our website feel free to give a suggestion acccrodingly and reachout
                        for more details and to get through our website you need to login first. 
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form action="">
                        <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                        <input type="text" placeholder="Name" name="name" onChange={handleChange}/>

                        {err && err}
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register