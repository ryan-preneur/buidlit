import React from 'react'
import { Link } from 'react-router-dom'
import './loginForm.css'
export const LoginForm = () => {
    return (
        <div className='authFormConatiner'>
            <div className="authForm">
                <div className="authTitle">Login</div>
                <div className='authDesc'>Login to FreeTube to enter the realm of free video content</div>
                <div>
                    <form action="" className='loginForm'>
                        <input type='email' placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <div className="authActionConatiner">
                            <div className="redirectAuth">Do not have an account?
                                <Link to='/signup' className='authLink'>Sign up here.</Link></div>
                            <div>
                                <button className='authButton'>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
