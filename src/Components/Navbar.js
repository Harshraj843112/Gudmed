import React from 'react';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const NavItems = [
    { id: "1", item: "About" },
    { id: "2", item: "Doctors" },
    { id: "3", item: "Contact" },
    { id: "4", item: "FAQ" },
];

const ContactItems = [
    { id: "5", icon: <IoIosCall />, item: "+91-9999196828" },
    { id: "6", icon: <IoMail />, item: "cs@gudmed.in" },
];

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-9/12 font-semibold mx-auto p-7 border-b-slate-200 cursor-pointer z-40'>
            {/* Left container for navigation items */}
            <div className='mb-4 md:mb-0 w-full md:w-auto'>
                <ul className='flex flex-row gap-6 justify-center md:justify-start'>
                    {NavItems.map((navItem) => (
                        <li key={navItem.id} className='hover:text-customBlue'>
                            <span>{navItem.item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Right container for contact items */}
            <div className='flex flex-row items-center gap-4 md:gap-6 w-full md:w-auto justify-center'>
                <ul className='flex flex-row items-center gap-4 md:gap-6 justify-between w-full'>
                    {ContactItems.map((contactItem) => (
                        <li key={contactItem.id} className='flex items-center hover:text-customBlue'>
                            {contactItem.icon}
                            <span className='ml-2'>{contactItem.item}</span>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default Navbar;
