import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className=' md:grid grid-cols-2 h-[100%]  md:h-[350px] w-[100%] bg-[#2699fb] ' >
        <div className=' md:ml-36 md:grid grid-cols-2  ' >
            <div className='ml-4' >
                <h1 className=' font-bold text-3xl mt-16 ' >Irfan Blog</h1>
                <p className='text-white mt-5 font-bold' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam  enim hic culpa quibusdam quae laudantium nulla non consequuntur esse.
                </p>
                <div className=' flex gap-10 mt-9 ' >
                    <FaFacebookSquare className='size-7 fill-white ' />
                    <BsInstagram className='size-7 fill-white ' />
                    <FaSquareTwitter className='size-7 fill-white ' />
                    <FaGithubSquare className='size-7 fill-white '/>
                </div>
                

            </div>
            <div className='mt-20 md:ml-28 ml-4 ' >
                <h1 className=' font-bold text-xl  ' >Solutions</h1>
                <div className='text-white mt-7 md:font-bold ' >
                    <h3 className=' mb-3 ' >Analytics</h3>
                    <h3 className=' mb-3 '>Marketion</h3>
                    <h3 className=' mb-3 '>Commerce</h3>
                    <h3 className=' mb-3 '>Insights</h3>
                </div> 
            </div>
        </div>
            
        <div className=' flex ml-4 ' >
            <div className='mt-20 md:ml-20 ' >
                <h1 className=' font-bold text-xl  ' >Supports</h1>
                <div className='text-white mt-7 md:font-bold ' >
                    <h3 className=' mb-3 ' >Pricing</h3>
                    <h3 className=' mb-3 '>Documentation</h3>
                    <h3 className=' mb-3 '>Guids</h3>
                    <h3 className=' mb-3 '>API Status</h3>
                </div> 
            </div>
            <div className='mt-20 md:ml-36 ml-3 ' >
                <h1 className=' font-bold text-xl  ' >Company</h1>
                <div className='text-white mt-7 md:font-bold ' >
                    <h3 className=' mb-3 ' >About</h3>
                    <h3 className=' mb-3 '>Blog</h3>
                    <h3 className=' mb-3 '>Job</h3>
                    <h3 className=' mb-3 '>Press</h3>
                    <h3 className=' mb-3 '>Careers</h3>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Footer