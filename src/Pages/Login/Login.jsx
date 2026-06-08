// import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

    const [sign, setSign] = useState("Sign In")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const user_auth = async ()=>{
        event.preventDefault();
        setLoading(true);
        if (sign==="Sign In") {
            await login(email, password)
        }else{
            await signup(name, email, password)
        }
        setLoading(false);
    }

    return (
        loading ? <div className='login-spinner w-full h-screen flex items-center justify-center'><img src={netflix_spinner} alt="" className='w-20' /></div> :
        <div className='login'>
            <img src={logo} alt="" className="logo" />
            <div className='form'>
                <h1 className='sign text-3xl font-medium'>{sign}</h1>
                <form action="" className='form'>
                    {sign === 'Sign Up' ? <input type="text" placeholder='Your name' value={name} onChange={(e) => { setName(e.target.value) }} className='input bg-[#333] border-0 outline-0 rounded-sm font-medium' /> : ''}
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Your email' className='input bg-[#333] border-0 outline-0 rounded-sm font-medium' />
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Your password' className='input bg-[#333] border-0 outline-0 rounded-sm font-medium' />
                    <button onClick={user_auth} type='submit' className='w-full border-0 outline-0 bg-[#e50914] text-white rounded-sm text-xl font-medium cursor-pointer'>{sign}</button>
                    <div className='help flex items-center justify-between text-[#b3b3b3] text-[13px]'>
                        <div className="remember flex items-center gap-1.5">
                            <input type="checkbox" name="" className='w-4 h-5' />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="sw mt-10 text-[#737373]">
                    {sign === 'Sign In' ? <p>New to Netflix? <span onClick={() => { setSign("Sign Up") }} className='ml-1.5 text-white font-medium cursor-pointer'>Sign Up Now</span></p> : <p>Already Have An Account? <span onClick={() => { setSign("Sign In") }} className='ml-1.5 text-white font-medium cursor-pointer'>Sign In Now</span></p>}



                </div>
            </div>
        </div>
    )
}

export default Login