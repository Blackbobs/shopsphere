'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const HomePage = () => {
    const router = useRouter()
  return (
    <div className='h-screen w-full bg__gradient text-white'>
        <nav className='flex items-center justify-between p-3'>
            <div>
                <h1 className='text-[20px] font-medium'>ShopSphere</h1>
            </div>
            <div className='flex items-center gap-2'>
                <a href="#!">Home</a>
                <a href="#!">About</a>
                <a href="#!">Contact</a>
            </div>
        </nav>
        <div className='py-10 px-2 max-w-screen-md mx-auto mt-10'>
            <p className='text-[32px] font-bold'>ShopSphere</p>
            <h1 className='text-[38px] font-bold'>Sell & Shop in 3D</h1>
            <p className='mt-10'>Dive in to a world of infinite shopping possibilities</p>
        <div className='flex items-center gap-3 py-5'>
            <button onClick={() => router.push('/login')} className='bg-white text-[#0CCC36] rounded-full py-3 px-5 font-bold text-[22px]'>Sign in</button>
            <button onClick={() => router.push('/signup')}  className='border-white rounded-full border py-3 px-5 font-bold text-[22px]'>Sign up</button>
        </div>
        </div>
    </div>
  )
}

export default HomePage