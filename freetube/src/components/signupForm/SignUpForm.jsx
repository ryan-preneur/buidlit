import React from 'react'
import { Link } from 'react-router-dom'
export const SignupForm = () => {
    return (
        <div className='authFormConatiner'>
            <div className="authForm">
                <div className="authTitle">Signup</div>
                <div className='authDesc'>Signup to FreeTube to enter the realm of free video content</div>
                <div>
                    <form action="" className='loginForm'>
                        <input type='Text' placeholder="Full Name" />
                        <input type='email' placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <div className="authActionConatiner">
                            <div className="redirectAuth">Already have an account?
                                <Link to='/login' className='authLink'>Login here.</Link></div>
                            <div>
                                <button className='authButton'>Signup</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
