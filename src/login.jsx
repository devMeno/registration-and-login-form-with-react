import { useState } from 'react'
import './App.css'
import image from '../public/icons/Gustave.jpg'
import logo from '../public/icons/github.png'
import twitter from '../public/icons/twitter.png'
import { useNavigate } from "react-router-dom"


export default function Login() {
     const [mail, setMail] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();

     const handleGoToRegistration = () => {
          navigate('/registration');
     }

     function handleMailChange(e) {
          setMail(e.target.value);
     }

     function handlePasswordChange(e) {
          setPassword(e.target.value);
     }

     function handleSubmit(e) {
          e.preventDefault();
          alert(mail + '' + password);
     }
     return (
          <>
               <div className="lg:flex h-screen font-noto">
                    <div className="w-full lg:w-3/5">
                         <div className="formulaire w-4/5 sm:w-3/5 xl:w-2/5 pt-12 m-auto justify-center mt-20">
                              <span className="text-3xl font-bold">
                                   Sign in to your account
                              </span><br />
                              <div className='mb-7 mt-0.5'>
                                   <span>Not a member ? </span><a href="" onClick={handleGoToRegistration} className='font-medium text-blue-600 '>Start a 14 day free trial</a>
                              </div>
                              <form action="">
                                   <label htmlFor="email" className='font-medium'>Email adress</label><br />
                                   <input type="email" id='email' onChange={handleMailChange} placeholder='example@gmail.com' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200 my-1' /><br />
                                   <label htmlFor="password" className='font-medium'>Password</label><br />
                                   <input type="password" id='password' onChange={handlePasswordChange} placeholder='Your password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200 my-1' /><br />
                                   <div className='flex my-2 '>
                                        <div className='w-1/2'>
                                             <input type="checkbox" id='check' className='mr-2.5 w-4 h-4' /><label htmlFor="check">Remember me</label>
                                        </div>
                                        <div className='w-1/2 text-right'><span className='font-medium text-blue-600'>Forgot password ?</span></div><br />
                                   </div>
                                   <button type='submit' onClick={handleSubmit} disabled={mail === '' || password === ''} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>Sign in</button>
                              </form>
                              <div className='my-3 w-full grid grid-cols-3'>
                                   <div className='pt-3 pr-2'><hr className='h-0.5 bg-zinc-400' /></div>
                                   <div className='text-center'><p className='text-sm sm:text-base'>Or continue with</p></div>
                                   <div className='pt-3 pl-2'><hr className='h-0.5 bg-zinc-400' /></div>
                              </div>
                              <div className='w-full flex'>
                                   <div className="w-1/2">
                                        <div className='w-11/12'>
                                             <button className='bg-slate-950  text-white font-bold py-2 px-4 rounded w-full'>
                                                  <a href="" className='flex justify-center'>
                                                       <img src={logo} alt="" className='w-6 h-6 mt-0.5 mr-1' /><span className='mt-0.5'>GitHub</span>
                                                  </a>
                                             </button>
                                        </div>
                                   </div>
                                   <div className='w-1/2 flex justify-end'>
                                        <div className='w-11/12'>
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
                    <div className="w-0 lg:w-2/5">
                         <img src={image} alt="Mon image" className='h-screen w-full' />
                    </div>
               </div>

          </>
     )
}
