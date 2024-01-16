import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [toggle, setToggle] = useState(false);
  // let a="Hello Check"
  return (
    <div className="bg-[#2699fb] p-4">
      <div className=" max-w-[1240px]  mx-auto flex justify-between items-center py-[15px] ">
        <div className=" text-3xl font-bold text-white ">Irfan Blog</div>

        { toggle ? (<IoMdClose onClick={()=> setToggle(!toggle)}  className=" text-white text-2xl md:hidden block " /> ) 
          : ( < IoMdMenu onClick={()=>setToggle(!toggle)} className=" text-white text-2xl md:hidden block " /> )
        }

        <ul className=" hidden md:flex text-white gap-10 font-bold ">
          <li> Home </li>
          <li> Company </li>
          <li> Resources </li>
          <li> About </li>
          <li> Contact </li>
        </ul>

       

        {/* Responsive Menu  */}
        <ul className={ ` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
            ${ toggle ? 'left-[-0]' : 'left-[-100%]' } ` }>
          <li className="p-5"> Home </li>
          <li className="p-5"> Company </li>
          <li className="p-5"> Resources </li>
          <li className="p-5"> About </li>
          <li className="p-5"> Contact </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
