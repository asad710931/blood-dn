
import { BiInfoCircle,BiSearch } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { Header } from '../components/header';
import NavBar from '../components/nav';
import { InputField } from '../components/inputFiled';
import { DonerList } from './dnerlist';

const dlnerList = [
    {
        name: "Mo Asad Ali",
        bloodGroup: "A+",
        location: "Raozan chittagong BD",
        phone: "01712345678"
    },
    {
        name: "John Doe 3",
        bloodGroup: "B-",
        location: "Dhaka, Bangladesh",
        phone: "01812345678"
    },
    {
        name: "Jane Smith",
        bloodGroup: "O+",
        location: "Chittagong, Bangladesh",
        phone: "01912345678"
    },
    {
        name: "Michael Johnson",
        bloodGroup: "AB-",
        location: "Sylhet, Bangladesh",
        phone: "01612345678"
    },
    {
        name: "Emily Davis",
        bloodGroup: "A-",
        location: "Khulna, Bangladesh",
        phone: "01512345678"
    }
];      

export default function searchPage() {
    return (
        <main className='w-full h-auto bg-gray-100'>
            <Header icon={<FaSearch size={30} color='white'/>} textValue={"  DonerDesk"}/>

            <div className='max-w-[800px] m-auto mt-20 p-4 bg-white rounded-xl shadow-lg'>
                <h1 className='text-2xl font-bold mb-4'>Search</h1>
                <InputField label={""} icon={<BiSearch size={20} />} type="text" placeholder="Search for donors, blood groups, or locations" />
                <button className='w-full m-auto bg-red-500 py-3 rounded-sm text-white text-lg text-bold hover:bg-blue-800 flex items-center justify-center mt-4'> Search</button>
                <div className='max-w-[600px] m-auto gap-4'>
                    {dlnerList.map((doner, index) => (
                        <DonerList key={index} {...doner} />
                    ))}
    
                </div>
                <div className='mt-40'></div>


            </div>


            <NavBar/>


        </main>
    )
}