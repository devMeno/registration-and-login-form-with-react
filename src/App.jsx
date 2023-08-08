import { useState } from 'react'
import './App.css'
import image from '../public/icons/photo.jpg'
import logo from '../public/icons/github.png'
import twitter from '../public/icons/twitter.png'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="flex">
                <div className="w-3/5">
                    <div className="formulaire w-2/5 pt-12 m-auto justify-center">
                        <h1 className="text-3xl">
                            Sign in to your account
                        </h1><br />
                        <div className='mb-7'>
                            <span>Not a member ? </span><a href="" className='font-medium text-blue-600 '>Start a 14 day free trial</a>
                        </div>
                        <form action="">
                            <label htmlFor="email" className='font-medium'>Email adress</label><br />
                            <input type="email" id='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200 my-1' /><br />
                            <label htmlFor="password" className='font-medium'>Password</label><br />
                            <input type="password" id='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200 my-1' /><br />
                            <div className='flex my-4 '>
                                <div className='w-1/2'>
                                    <input type="checkbox" id='check' className='mr-2.5 w-4 h-4' /><label htmlFor="check">Remember me</label>
                                </div>
                                <div className='w-1/2 text-right'><span className='font-medium text-blue-600'>Forgot password ?</span></div><br />
                            </div>
                            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full' disabled>Sign in</button>
                        </form>
                        <p className='my-5 text-center'>Or continue with</p>
                        <div className='w-full flex'>
                            <div className="w-1/2">
                                <div className='w-10/12'>
                                    <button className='bg-slate-950  text-white font-bold py-2 px-4 rounded w-full'>
                                        <a href="" className='flex justify-center'>
                                            <img src={logo} alt="" className='w-6 h-6 mt-0.5 mr-1' /><span className='mt-0.5'>GitHub</span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-end'>
                                <div className='w-10/12'>
                                    <button className='bg-slate-950 text-white font-bold py-2 px-4 rounded w-full'>
                                        <a href="" className='flex justify-center'>
                                            <img src={twitter} alt="" className='w-6 h-6 mt-0.5 mr-1' /><span className='mt-0.5'>Twitter</span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 bg-blue-50">
                    <img src={image} alt="Mon image" />
                </div>
            </div>

        </>
    )
}

export default App
