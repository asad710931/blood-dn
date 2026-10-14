

import { BiHome,BiRegistered,BiSave,BiSolidDonateBlood, BiUser } from "react-icons/bi";
import { InputField } from '../components/inputFiled';
import { MdAppRegistration, MdMail, MdPassword, MdPhone } from 'react-icons/md';
import { SelectOption } from '../components/selectOption';
import { FaUser } from "react-icons/fa";
 
export const SingUp=()=>{

    return (

                   <div className='w-full max-w-[600px] m-auto mb-30 px-5 py-10 bg-white rounded-xl shadow-lg'>
                       <BiUser size={100} color='red' className='m-auto mb-2'/>
                       <h1 className='text-2xl font-bold text-center mb-1'>Create Your Account</h1>
                       <div className='w-full'>
                      
                            <InputField label={" Full Name"} icon={<FaUser size={20} />} type="text" placeholder="Enter your full name"/>
                            <InputField label={" Phone Number"} icon={<MdPhone size={20} />} type="tel" placeholder="Enter your phone number" />
                            <SelectOption label={" Blood Group"} icon={<BiSolidDonateBlood size={20} />} />
                            <InputField label={" Password"} icon={<MdPassword size={20} />} type="password" placeholder="Enter your password" />
                            <InputField label={" Confirm Password"} icon={<MdPassword size={20} />} type="password" placeholder="Confirm your password" />
                            <button className='w-[100%] bg-red-500 p-2 py-3 rounded-sm text-white font-medium hover:bg-red-600 flex items-center justify-center'><FaUser size={15}/> Sign Up</button>

                     </div>
                   </div>
    
    );
}
