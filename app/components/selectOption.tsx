import {BiUser} from "react-icons/bi";
import { JSX } from "react/jsx-runtime";

interface InputFieldProps {
    label: string;
    icon?: JSX.Element;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SelectOption = ({ label,icon, onChange }: InputFieldProps) => {
    return (
        <div>

            <label className="block text-gray-700 font-bold mb-2 flex"><span className="mr-2">{icon}</span> {label}</label>
          <select className="w-[100%] px-3 py-3 border-2 border-black-700 rounded-sm focus:outline-none focus:border-gray-500 mb-4" onChange={onChange}>
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>	
          </select>
        </div>
    );
};  