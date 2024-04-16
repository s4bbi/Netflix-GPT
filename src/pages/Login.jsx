import React from 'react'

const Login = () => {
  return (
    <div className='bg-black sm:bg-herobg w-full h-screen py-20 font-[segoe ui]'>
      <div className="bg-black md:w-[450px] md:h-[640px] mx-auto px-16 py-10 opacity-85 flex flex-col gap-5 rounded-[7px]">
        <header className="text-white text-[2rem] font-bold py-2">Sign In</header>
        <form action="" className='flex flex-col gap-y-5'>
          <input type="text" placeholder='Email or phone number' className='bg-zinc-950 h-14 w-full border-[0.85px] border-gray-500 rounded-[3px] px-4 text-white'/>
          <input type="password" placeholder='Password' className='bg-zinc-950 h-14 w-full border-[0.85px] border-gray-500 rounded-[3px] px-4 text-white'/>
          <button className='bg-red-600 h-10 w-full rounded-[5px] px-4 text-white font-semibold'>Sign In</button>
        </form>
        <p className='text-center text-gray-300'>OR</p>
        <button className='bg-zinc-700 h-10 w-full rounded-[5px] px-4 text-white font-semibold'>Use a sign in code</button>
        <p className='text-center text-gray-100 '>Forgot Password ?</p>
        <div className='flex gap-3 items-center'>
          <input type="checkbox" className='text-white h-4 w-4' ></input>
          <label className='text-white'> Remember Me</label>
        </div>
        <p className='text-gray-400'>New to Netflix? <span className='text-white font-medium'>Sign up now.</span></p>
        <p className='text-gray-400 text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-700'>Learn more.</span></p>
      </div>
    </div>
  )
}

export default Login