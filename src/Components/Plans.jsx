import React from 'react'
import Banner from './Banner'
import single from '../assets/image/single.png'
import double from '../assets/image/double.png'
import triple from '../assets/image/triple.png'

function Plans() {
  return (
    <div className='py-[100px] px-2 ' >
        <div className="md:grid grid-cols-3 max-w-[1240px] mx-auto gap-6 ">
            <div className='shadow-xl h-[500px] my-4 bg-[#EEEEEE]  hover:scale-105 duration-500 ' >

                <div className=' w-[80%] mx-auto items-center  text-center ' >
                    <img src={single} alt="" className=' mb-5  w-[100px] ml-[90px] ' />
                    <h1 className='font-bold text-3xl mb-[20px] ' >Web Development</h1>
                    <h1 className='font-bold text-3xl mb-[20px] ' >$149</h1>
                    <div className='font-bold' >
                        <p  className='py-[10px]' >Lorem ipsum dolor sit.</p><hr />
                        <p className='py-[10px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis!</p><hr />
                        <p className='py-[10px]'>Lorem ipsum dolor sit amet.</p><hr />
                    </div>
                    <button className=' w-[60%] bg-[#BC9E83] mt-6 text-white p-3 rounded ' >Get started</button>
                </div>
                
            </div>

            <div className='shadow-xl h-[500px] my-4 bg-[#E5DEDE]  hover:scale-105 duration-500 ' >
                <div className=' w-[80%] mx-auto items-center  text-center ' >
                        <img src={double} alt="" className=' mb-5  w-[100px] ml-[90px] ' />
                        <h1 className='font-bold text-3xl mb-[20px] ' >Digital Marketing</h1>
                        <h1 className='font-bold text-3xl mb-[20px] ' >$149</h1>
                        <div className='font-bold' >
                            <p  className='py-[10px]' >Lorem ipsum dolor sit.</p><hr />
                            <p className='py-[10px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis!</p><hr />
                            <p className='py-[10px]'>Lorem ipsum dolor sit amet.</p><hr />
                        </div>
                        <button className=' w-[60%] bg-black mt-6 text-white p-3 rounded ' >Get started</button>
                    </div>
                </div>
            <div className='shadow-xl h-[500px] my-4 bg-[#EEEEEE] hover:scale-105 duration-500 ' >
                <div className=' w-[80%] mx-auto items-center  text-center ' >
                        <img src={triple} alt="" className=' mb-5 w-[100px] ml-[90px] ' />
                        <h1 className='font-bold text-3xl mb-[20px] ' >App Development</h1>
                        <h1 className='font-bold text-3xl mb-[20px] ' >$149</h1>
                        <div className='font-bold' >
                            <p  className='py-[10px]' >Lorem ipsum dolor sit.</p><hr />
                            <p className='py-[10px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis!</p><hr />
                            <p className='py-[10px]'>Lorem ipsum dolor sit amet.</p><hr />
                        </div>
                        <button className=' w-[60%] bg-[#BC9E83] mt-6 text-white p-3 rounded ' >Get started</button>
                    </div>
            </div>
        </div>
    </div>
    
  )
}

export default Plans