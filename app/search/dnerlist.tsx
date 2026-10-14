import { BiUser, BiUserX } from "react-icons/bi";
import { MdCall } from "react-icons/md";

interface Doner {
  name: string;
  bloodGroup: string;
  location: string;
  phone: string;
}
export const DonerList = ({name, bloodGroup, location, phone}: Doner) => {
  return (
    <div className="flex justify-between items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md mt-4">
        <div className="flex gap-4 items-center">
            <BiUser size={60} color="gray" className="p-3 rounded-full bg-gray-200"/>
            <div className="flex flex-col gap-0 justify-center">
                <span>{name}, <b>{bloodGroup}</b></span>
                <span className="text-gray-400">{location}</span>
                <span>{phone}</span>
            </div>
        </div>
        <a href={`tel:${phone}`}>
            <MdCall size={30} color="#b90d38"/>
            </a>
    </div>
  );
};