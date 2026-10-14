import Link from 'next/link';
import { FcAddDatabase } from "react-icons/fc";
import { FaArrowLeft,FaHome,FaSearch,FaInfo,FaUser} from "react-icons/fa";

import { BiSolidDonateBlood,BiHome,BiSearch,BiUser,BiInfoCircle } from "react-icons/bi";
 
export default function NavBar() {

	return (
		<main className='font-display w-[100%]'>
				<div className='opacity-80 w-[340px] m-auto bg-gray-100 mt-130 p-4 rounded-xl shadow-xl fixed bottom-[20px] left-[50%] translate-x-[-50%] hover:opacity-100 
                 active:opacity-100 focus:opacity-100'
                 
                 >
					<div className='flex justify-around'>
							<Link href="/" className='flex flex-col items-center font-bold uppercase text-[11px] text-gray-800 hover:transition-transform duration-100 hover:scale-115' title="Home"><BiHome size={30} color="#fb1414"/>Home</Link>
				        	<Link href="search/" className='flex flex-col items-center font-bold uppercase text-[11px] text-gray-800 hover:transition-transform duration-100 hover:scale-115' title="Search"><BiSearch size={30} color="#fb1414"/>Search</Link>
				        	<Link href="info/" className='flex flex-col items-center font-bold uppercase text-[11px] text-gray-800 hover:transition-transform duration-100 hover:scale-115' title="Info"><BiInfoCircle size={30} color="#fb1414"/>Info</Link>
				        	<Link href="profile/" className='flex flex-col items-center font-bold uppercase text-[11px] text-gray-800 hover:transition-transform duration-100 hover:scale-115' title="Profile"><BiUser size={30} color="#fb1414"/>Profile</Link>
					</div>
				</div>
			
		</main>
	
	);
}
