import Link from "next/link";
import {FaUser,FaArrowLeft, FaCheck} from "react-icons/fa";
import {BiSolidDonateBlood,BiCalendarCheck} from "react-icons/bi";
import { JSX } from "react/jsx-runtime";


interface Header{
    textValue:String,
    icon?:JSX.Element,

}

export const Header = ({textValue, icon}:Header)=>{

    return (
          <div className='w-full h-14 bg-red-500 flex items-center fixed shadow-xl'>
               <Link href="./" className='p-5'>{icon || <FaArrowLeft size={25} color='white'/>}</Link>
               <span className="ml-5"><BiSolidDonateBlood size={30} color="white"/></span>
                <h1 className='text-center text-white text-xl m-0 font-bold'>{textValue}</h1>
            </div>

    );

}