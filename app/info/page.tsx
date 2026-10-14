
import { BiInfoCircle } from 'react-icons/bi';
import { Header } from '../components/header';
import NavBar from '../components/nav';


export default function infoPage() {
    return (
        <main className='w-full h-auto bg-gray-100'>
            <Header icon={<BiInfoCircle size={30} color='white'/>} textValue={" DonerDesk"}/>

            <div className='w-[90%] m-auto mt-30 p-4 bg-white rounded-xl shadow-lg'>
                <h1 className='text-2xl font-bold mb-4'>Information</h1>
                <p className='text-gray-700 mb-4'>
                    Welcome to our blood donation platform! Here, you can find valuable information about blood donation, including eligibility criteria, donation process, and the importance of donating blood. We aim to raise awareness and encourage individuals to contribute to saving lives through blood donation.
                </p>
                <p className='text-gray-700 mb-4'>
                    Blood donation is a simple yet powerful act that can make a significant difference in the lives of those in need. By donating blood, you are helping patients who require transfusions due to medical conditions, surgeries, or emergencies. Your contribution can save lives and provide hope to those facing health challenges.
                </p>
                <p className='text-gray-700 mb-4'>
                    We encourage everyone to learn more about the benefits of blood donation and consider becoming a donor. Together, we can create a community of compassionate individuals dedicated to making a positive impact on the lives of others. Thank you for your interest in blood donation and for being a part of this life-saving initiative!
                </p>

            </div>


            <NavBar/>


        </main>
    )
}