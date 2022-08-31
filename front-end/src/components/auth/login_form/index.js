import React,{Fragment,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {Help} from 'rbx'
import '../../../styles/register.scss'
import { Navigate } from "react-router-dom";
import UsersService from '../../../services/users';

const LoginForm = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async(evt)=>{
        evt.preventDefault()
        try {
            const user = await UsersService.login({email:email,password:password})
            setRedirectToNotes(true)
        } catch (error) {
            setError(true)
        }
    }

    if(redirectToRegister){
        return <Navigate to={{pathname:"/register"}}/>
    }else if(redirectToNotes){
        return <Navigate to={{pathname:"/notes"}}/>
    }

return(
    <Fragment>
        <div className='container-form'>
            <form onSubmit={HandleSubmit}>
                <div className='input-data'>
                
                    <label for="">
                    <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                        <input type="email" required name="email" placeholder='Email' value={email}
                        onChange={e=> setEmail(e.target.value)}></input>
                    </label>
                </div>
                <div className='input-data'>
                    
                    <label for="">
                    <FontAwesomeIcon icon={faLock} className="icons"/>
                        <input type="password" required name="password" placeholder='Password'value={password}
                        onChange={e=> setPassword(e.target.value)}></input>
                    </label>
                </div>
                <div className='link-data'>
                    <a onClick={e=>setRedirectToRegister(true)}>Register</a>
                    <button outlined>Login</button>
                </div>
                { error && <Help color="danger">Email or Password invalid</Help> }
            </form>
        </div>
    </Fragment>
    )
}
export default LoginForm