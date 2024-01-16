import React from 'react'

function NewsLetter() {
  return (
    <div className="bg-[#2699fb] p-4" >
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px] '>
            <div className='m-2' >
                <h1 className=' text-[20px] md:text-[40px] font-bold text-white' >Want to learn latest I.T skills ?</h1>
                <span className=' text-white ' > Sign up to news letter and stay up to date. </span>
            </div>    
            <div className='m-2'>
                <input type="text" className=' sd:w-full rounded mr-2 mb-2 p-3 text-slate-600' placeholder='Email' />
                <button className=' bg-black text-white p-3 rounded ' >Get started</button>
                <br />
                <p className='text-white' > We Care about the protection of your data. read our <br />
                <a href="" className='text-black' >Privacy Policy</a>  </p>
            </div>    
        </div>    
    </div>
  )
}

export default NewsLetter
