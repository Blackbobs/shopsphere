'use client'
import React, { useState} from 'react'
import { useRouter } from 'next/navigation'



const Signup = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        router.push('/platform')
    }

  return (
    <div className='bg__gradient w-full h-screen'>
         <nav className='flex items-center justify-between p-3 text-white'>
            <div>
                <h1 className='text-[20px] font-medium'>ShopSphere</h1>
            </div>
            <div className='flex items-center gap-2'>
                <a href="#!">Home</a>
                <a href="#!">About</a>
                <a href="#!">Contact</a>
            </div>
        </nav>
        <div className='w-full h-full flex justify-center mt-[100px]'>
            <form onSubmit={(e) => e.preventDefault()} className='w-full flex flex-col gap-5 p-2 max-w-screen-md mx-auto'>
                <input type="email" value={email} placeholder='email address' className='p-3 rounded-lg' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='firstname' className='p-3 rounded-lg' />
                <input type="text" placeholder='lastname' className='p-3 rounded-lg' />
                <input type="password" value={password} placeholder='password' className='p-3 rounded-lg' onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder='confirm password' className='p-3 rounded-lg' />

                <div className='flex items-center justify-center gap-3 py-5'>
            <button onClick={handleSubmit} type='submit' className='bg-white capitalize text-[#0CCC36] rounded-full py-3 px-7 font-bold text-[22px]'>Create Account</button>
            
        </div>
            </form>
        </div>
    </div>
  )
}

export default Signup