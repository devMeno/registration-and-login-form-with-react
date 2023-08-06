import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="w-1/2 pt-12">
                <h1 className="text-3xl  my-0.5">
                    Sign in to your account
                </h1><br />
                <div className='mb-7'>
                    <span>Not a member ?</span><a href="" className='font-medium text-blue-600 '>Start a 14 day free trial</a>
                </div>
                <form action="">
                    <label htmlFor="email" className='font-medium'>Email adress</label><br />
                    <input type="email" id='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-50 my-1' /><br />
                    <label htmlFor="password" className='font-medium'>Password</label><br />
                    <input type="password" id='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-50 my-1' /><br />
                    <div className='flex my-4'>
                        <div>
                            <input type="checkbox" /><span>Remember me</span>
                        </div>
                        <div><span className='font-medium text-blue-600'>Forgot password ?</span></div><br />
                    </div>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full' disabled>Sign in</button>
                </form>
                <p>Or continue with</p>
                <div>
                    <button>Bonjour</button>
                    <button>Bonsoir</button>
                </div>
            </div>
        </>
    )
}

export default App
