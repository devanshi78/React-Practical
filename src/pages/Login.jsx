import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user,setUser] = useState({})
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.email === 'admin@gmail.com'){
            if(user.password === '1234'){
                navigate('/roomdetails');
            } else {
                alert("Wrong Password")
            }
        } else {
            alert("Wrong Email.");
        }
        setUser({});
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className='col-md-6'>
                        <form action="" method="post" onSubmit={handleSubmit} className='card shadow py-5 px-4'>
                            <h2 className='text-center mb-4'>Login</h2>
                            <div className='mb-2'>
                                <label htmlFor="email" className='form-label'>Email : </label>
                                <input type="email" className='form-control' name="email" id="email" onChange={handleChange} value={user.email || ''}/>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="password" className='form-label'>password : </label>
                                <input type="password" className='form-control' name="password" id="password" onChange={handleChange} value={user.password || ''}/>
                            </div>
                            <button className='btn btn-primary' type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
