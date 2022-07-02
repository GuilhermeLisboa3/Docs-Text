import React, { Fragment, useState } from 'react';
import { Navigate } from "react-router-dom";
import {Help} from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import '../../../styles/register.scss'
import UsersService from '../../../services/users';

const RegisterForm = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async(evt)=>{
        evt.preventDefault()
        try {
            const user = await UsersService.register({name:name,email:email,password:password})
            setRedirectToLogin(true)
        } catch (error) {
            setError(true)
        }
    }

    if(redirectToLogin){
        return <Navigate to={{pathname:"/login"}}/>
    }

    return(
        <Fragment>
            <div className='container-form'>
                <form onSubmit={HandleSubmit}>
                    <div className='input-data'>
                        <label for="">
                        <FontAwesomeIcon icon={faUser} className="icons"/>
                            <input type="name" required name="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)}></input>
                        </label>
                    </div>
                    <div className='input-data'>
                    
                        <label for="">
                        <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                            <input type="email" required name="email" placeholder='Email'value={email} onChange={e => setEmail(e.target.value)}></input>
                        </label>
                    </div>
                    <div className='input-data'>
                        
                        <label for="">
                        <FontAwesomeIcon icon={faLock} className="icons"/>
                            <input type="password" required name="password" placeholder='Password'value={password} onChange={e => setPassword(e.target.value)}></input>
                        </label>
                    </div>
                    <div className='link-data'>
                        <a onClick={e =>{setRedirectToLogin(true)}}>Login</a>
                        <button outlined>Register</button>
                    </div>
                    {error && <Help color="danger">Email or Password invalid</Help>}
                </form>
            </div>
        </Fragment>
    )
}


export default RegisterForm