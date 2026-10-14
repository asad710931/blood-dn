'use client';
import Link from "next/link";
import CirleInfo from '../components/canvas';
import {FaUser,FaArrowLeft, FaCheck} from "react-icons/fa";
import {BiSolidDonateBlood,BiCalendarCheck, BiEdit,BiUser} from "react-icons/bi";
import { FcAddDatabase } from "react-icons/fc";
import NavBar from "../components/nav";
import {Header} from "../components/header";



const bloodDonationIntel = [
  {
    id: "bd-001",
    date: "2026-03-15",
    hospital: {
      name: "City General Hospital",
      location: "Building B, 3rd Floor",
      city: "New York"
    },
    donateTo: {
      recipientType: "Patient", // Can be "Patient", "Blood Bank", or "Disaster Relief"
      name: "John Doe",
      bloodTypeRequired: "O-Negative",
      urgency: "High"
    },
    status: "Completed",
    volumeMl: 450
  },
  {
    id: "bd-002",
    date: "2026-06-22",
    hospital: {
      name: "St. Jude Medical Center",
      location: "Main Donor Clinic",
      city: "Los Angeles"
    },
    donateTo: {
      recipientType: "Blood Bank",
      name: "Red Cross Routine Supply",
      bloodTypeRequired: "Any",
      urgency: "Routine"
    },
    status: "Completed",
    volumeMl: 500
  },
  {
    id: "bd-003",
    date: "2026-09-10",
    hospital: {
      name: "Grace Memorial Hospital",
      location: "ICU Wing",
      city: "Chicago"
    },
    donateTo: {
      recipientType: "Patient",
      name: "Jane Smith",
      bloodTypeRequired: "A-Positive",
      urgency: "Critical"
    },
    status: "Scheduled",
    volumeMl: 450
  },
  {
    id: "bd-001",
    date: "2026-03-15",
    hospital: {
      name: "City General Hospital",
      location: "Building B, 3rd Floor",
      city: "New York"
    },
    donateTo: {
      recipientType: "Patient", // Can be "Patient", "Blood Bank", or "Disaster Relief"
      name: "John Doe",
      bloodTypeRequired: "O-Negative",
      urgency: "High"
    },
    status: "Completed",
    volumeMl: 450
  },
  {
    id: "bd-002",
    date: "2026-06-22",
    hospital: {
      name: "St. Jude Medical Center",
      location: "Main Donor Clinic",
      city: "Los Angeles"
    },
    donateTo: {
      recipientType: "Blood Bank",
      name: "Red Cross Routine Supply",
      bloodTypeRequired: "Any",
      urgency: "Routine"
    },
    status: "Completed",
    volumeMl: 500
  },
  {
    id: "bd-003",
    date: "2026-09-10",
    hospital: {
      name: "Grace Memorial Hospital",
      location: "ICU Wing",
      city: "Chicago"
    },
    donateTo: {
      recipientType: "Patient",
      name: "Jane Smith",
      bloodTypeRequired: "A-Positive",
      urgency: "Critical"
    },
    status: "Scheduled",
    volumeMl: 450
  }
];

// Example: How to access the data


export default function Profile() {

    console.log()

    const handleBack=()=>{
        alert('! Under Construction');
        console.log('hello');
    }
    return (
        <main className='w-full h-auto bg-gray-100'>
            <Header icon={<BiUser size={30} color='white'/>} textValue={"DonerDesk"}/>

            <div className='max-w-[95%] m-auto'>
              <div className="flex justify-around pt-15 pb-15 bg-white rounded-lg mt-20 mb-5">
                <div className="chirt flex flex-col items-center border-b-3 border-red-300 p-2 rounded-lg">
                    <CirleInfo bloodGivenDate={bloodDonationIntel[2].date} daysToWait={57}/>
                   <p className='text-lg font-bold text-red-500 mt-2'>Keep Track </p>
                </div>
                <div className="flex flex-col items-center justify-around">
                    <i className='box-center'><FaUser size={60} color="gray"/></i>
                    <p className='text-xl center'>Mo Asad Ali</p>
                    <button onClick={handleBack} className='flex items-center text-sm px-10 py-3 bg-red-500 p-2 rounded-sm text-white font-medium font-bold hover:bg-red-600 cursor-pointer'><BiEdit size={15}/><p className="font-bold"> Edit Profile</p></button>
                </div>
             </div>
                    <div className="flex justify-between p-2 bg-gray-200">
                      <h1 className="text-xl font-bold">List of Donations</h1>
                     <button type='button' onClick={handleBack} className='pr-10 pl-10 btn bg-yellow-500 p-1 rounded-sm text-white font-medium hover:bg-blue-700'><FcAddDatabase title={"Add New Donation info"} size={30}/></button>

                      
                    </div>
                 <div className="">
                  {bloodDonationIntel.map((dner) => (
                    <article key={dner.id} className="rounded-lg bg-white p-4 mt-2 shadow-sm">
                      <div className="flex justify-between">
                         <div> 
                          <h2 className="font-bold">{dner.hospital.name}</h2>
                          <p>Date : {dner.date}</p>
                          <p>Donated to: {dner.donateTo.name} ({dner.donateTo.recipientType})</p>
                          <p>Volume: {dner.volumeMl} ml</p>
                          </div>
                        <span>{dner.status==="Completed"?(<div className=""><FaCheck title="Done" size={25} color="#15bb33"/></div>):(<div className=""><BiCalendarCheck title="Scheduled" size={30} color="red"/></div>)}</span>
                      </div>

                    </article>
                  ))}
                 </div>
            </div>
            <div className="w-[100%] h-30"></div>

         <NavBar/>
        </main>
    
    );
}
