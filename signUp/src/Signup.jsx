import React, { useState } from 'react';
import "./style.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate()
    const [Input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        coPassword: "" 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, coPassword } = Input;

        if (!name || !email || !password || !coPassword) {
        alert("Please fill in all fields.");
        return;
    }
        if(Input.password === Input.coPassword){
            localStorage.setItem("user", JSON.stringify(Input));
            alert("You have registered!");
        }else{
            alert("password do not match")
        }
        
        setInput({
                    name: "",
                    email: "",
                    password: "",
                    coPassword: ""
                });


        navigate('/')
    };


    return (
        <div className='container'>
            <div className='form-container'>
                    <h2>Sign Up Page</h2>
                    <form onSubmit={handleSubmit} className='form' >
                        <input
                            name="name"
                            type="text"
                            placeholder='Username'
                            value={Input.name}
                            onChange={handleChange}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder='Email'
                            value={Input.email}
                            onChange={handleChange}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder='Password'
                            value={Input.password}
                            onChange={handleChange}
                        />
                        <input
                            name="coPassword"
                            type="password"
                            placeholder='Confirm Password'
                            value={Input.coPassword}
                            onChange={handleChange}
                        />
                       <button type="submit">Sign Up</button>
                       <p>Already a user? <a href='/'>Login</a></p>
                    </form>
                    
            </div>
        </div>
    );
};

export default Signup;

