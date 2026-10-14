
'use client'
import Link from 'next/link';
import Image from 'next/image';
import './globals.css'
import {FaLock, FaUser} from "react-icons/fa";

import { BiHome,BiRegistered,BiSave,BiSolidDonateBlood, BiUser } from "react-icons/bi";
import NavBar from './components/nav';
import { Header } from './components/header';
import { InputField } from './components/inputFiled';
import { MdAppRegistration, MdMail, MdPassword, MdPhone } from 'react-icons/md';
import { SelectOption } from './components/selectOption';
import { SingUp } from './home/signup';
import { LogIn } from './home/logIn';
import {useState} from "react";
export default function Home() {

	const [activeComponent, setActiveComponent] = useState('');

	return (
		<main className='font-display w-[100%]'>

                   <Header icon={<BiHome size={30} color="white"/>} textValue={" DonorDesk"}/>
				     <div className='mt-20'>
						<Image src="/bdn.svg" alt="Blood Donation" width={200} height={200} className='m-auto mb-5'/>
						<h1 className='text-center text-2xl font-bold text-red-500'>Welcome to DonorDesk</h1>
						<p className='text-center text-md font-medium text-gray-500'>Your one-stop solution for blood donation management</p>	
						</div>	
                      <div className='mb-0'></div>
					  	{activeComponent === 'signup' ? <SingUp/> : <LogIn/>}
                        <div className='w-full m-auto mb-30 px-5 py-10 bg-white flex flex-row items-abound justify-around rounded-xl shadow-lg'> 
                          <button className='w-[200px] bg-red-500 p-2 py-3 rounded-sm text-white font-medium hover:bg-red-600 flex items-center justify-center' onClick={() => setActiveComponent('signup')}><FaUser size={15}/> Sign Up</button>
						  <button className='w-[200px] bg-red-500 p-2 py-3 rounded-sm text-white font-medium hover:bg-red-600 flex items-center justify-center' onClick={() => setActiveComponent('login')}><FaLock size={15}/> Log In</button>

						</div>
						
                      <div className='mb-30'></div>


					
			
				<NavBar/>
	
			
		</main>
	
	);
}
