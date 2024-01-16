import React from 'react'
import Typed from 'react-typed';


function Banner() {
  return (
    <div className=' bg-[#2699fb] w-full py-[50px]  ' >
        <div className=' max-w-[1240px] py-[100px] mx-auto font-bold text-center ' >
            <div className=' text-xl md:text-4xl mt-4 md:p-[20px] ' >Learn with us</div>
            <div className='text-white  text-5xl md:text-[80px] md:p-[20px] ' > Grow with us. </div>
            <div className=' text-[20px] md:text-[50px] text-white md:p-[20px] ' > 
                Learn <Typed strings={['Web Development','Digital Marketing', 'Ethical Hacking']} 
                typeSpeed={100}
                loop={true}
                backSpeed={120} 
                />
            </div>
            <button className=' bg-black text-white p-3 rounded ' >Get started</button>
        </div>
    </div>
  )
}  

export default Banner