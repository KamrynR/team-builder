import React, { useState } from 'react';
import './Form.css';

const Form = props => {
    const [user, setUser] = useState({username: '', email: '', role: ''});
    const userChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const handleSubmit = e => {
        e.preventDefault();
        if(user) {
        setUser({ username: '', email: '' , role: ''});
        props.setUserArr([...props.userArr, {user}]);
        console.log(user.username);
        console.log(user.email);
        console.log(user.role);
        console.log(user);
        }
    };

    return (
    <div className='formBody'>
        <form  className='login-form' onSubmit={e => handleSubmit(e)}>
            <h1>Create Account</h1>
            <div className='txtb'>
                <input 
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={e => userChange(e)}/>
                <span data-placeholder="Username"></span>
            </div>
            <div className='txtb'>
                <input 
                    type="text" 
                    name="email"
                    value={user.email}
                    onChange={e => userChange(e)} />
                <span data-placeholder="Email"></span>
            </div>
            <div className='txtb'>
                <input 
                    type="text"
                    name="role"
                    value={user.role}
                    onChange={e => userChange(e)} />
                <span data-placeholder="Role"></span>
            </div>
            <input className="login-button" type="submit" value="Sign Up" />
            <div className='bottom-text'>
                Already have an account?
                <a href="#"> Sign In</a>
            </div>
        </form>
    </div>
    )
}

export default Form;