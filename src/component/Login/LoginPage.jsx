import React, {useCallback, useRef} from 'react';
import './LoginPage.css';
import {useNavigate} from "react-router";


function LoginPage() {
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const navigation = useNavigate();
    const info =  JSON.parse(localStorage.getItem('users'));


    const goClientPage = useCallback(()=>{
        if (loginRef.current.value === info.email && passwordRef.current.value === info.password){
           return navigation(`/clientPage/:id${info.id}`);
        }
    })
    return (
        <div className='Login__Page'>
            <div className='Login__Form'>
                <form className='Form__Form'>
                    <p className='Login__p'>Login Page</p>
                    <label className='Form__Label'>Login/Email</label>
                    <input className='Form__Input' ref={loginRef} type='text'/>
                    <label className='Form__Label'>Password</label>
                    <input className='Form__Input' ref={passwordRef} type='password'/>
                    <div className='Submit' onClick={goClientPage} >Send</div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;