import {BiUser} from "react-icons/bi";
import { JSX } from "react/jsx-runtime";

interface InputFieldProps {
    label: string;
    icon?: JSX.Element;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ label,icon, type, placeholder, value, onChange }: InputFieldProps) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 flex"><span className="mr-2">{icon}</span> {label}</label>
            
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-[100%] px-3 py-3 border-2 border-black-700 rounded-sm focus:outline-none focus:border-gray-500"
            />
        </div>
    );
};  