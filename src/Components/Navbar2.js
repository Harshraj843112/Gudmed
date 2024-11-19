import React, { useState } from 'react';
import Logo from "../img/Gudmed1.png";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(null);
    
    const navItems = [
        { name: "Home", link: "/", hasDropdown: false },
        {
            name: "Doctors",
            link: "/doctor",
            hasDropdown: true,
            dropdownItems: [
                { name: "OPD", link: "/opd" }, // OPD under Doctors
            ]
        },
        {
            name: "For Hospital",
            link: "/hospital",
            hasDropdown: true,
            dropdownItems: [
                { name: "IPD", link: "/ipd" }, // IPD under For Hospital
            ]
        },
        { name: "Services", link: "/services", hasDropdown: false }, // Services directly on navbar
        { name: "Team", link: "/team", hasDropdown: false }, // Team directly on navbar
        { name: "Contact", link: "/contact", hasDropdown: false }, 
    ];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = (index) => setIsServicesDropdownOpen(prev => (prev === index ? null : index));

    const renderDropdown = (dropdownItems) => (
        <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg p-2 w-48 z-10">
            {dropdownItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md"
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );

    const renderNavItem = (item, index) => (
        <li
            key={index}
            className="relative group"
            onMouseEnter={() => item.hasDropdown && toggleDropdown(index)}
            onMouseLeave={() => item.hasDropdown && setIsServicesDropdownOpen(null)}
        >
            <div className="flex items-center space-x-4 group-hover:text-blue-600 transition-colors duration-300">
                <Link to={item.link} className="hover:text-blue-600">
                    {item.name}
                </Link>
                {item.hasDropdown && <IoIosArrowDown className="text-gray-600 transition-all duration-300 group-hover:text-blue-600" />}
            </div>
            {item.hasDropdown && isServicesDropdownOpen === index && renderDropdown(item.dropdownItems)}
            <div className="absolute left-0 h-[3px] w-16 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bottom-[-8px]" />
        </li>
    );

    return (
        <nav className="bg-white shadow-md w-full z-30 sticky top-0">
            <hr className="border-b-2 w-full border-gray-100" />
            <div className="container px-4 py-4 flex justify-between items-center mx-auto">
                <div className="flex items-center space-x-4">
                    <img src={Logo} alt="logo" className="h-16 w-auto" />
                </div>

                <ul className="hidden md:flex md:gap-8 font-medium text-lg text-gray-700 items-center">
                    {navItems.map((item, index) => renderNavItem(item, index))}
                </ul>

                <div className="md:hidden" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <IoMdClose className="text-3xl text-gray-700" /> : <HiOutlineMenuAlt3 className="text-3xl text-gray-700" />}
                </div>

                <div className="hidden md:block ml-24">
                    <button className="relative flex h-[50px] w-52 items-center justify-center overflow-hidden bg-customBlue text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-customDark before:duration-500 before:ease-out hover:shadow-customBlue hover:before:h-56 hover:before:w-56 rounded-lg">
                        <span className="relative z-10 font-semibold">Book Appointment</span>
                    </button>
                </div>
            </div>

            <ul className={`${isMobileMenuOpen ? "flex flex-col p-4 shadow-lg absolute top-[70px] left-0 w-full bg-white z-20" : "hidden"} md:hidden font-medium text-lg text-gray-700 items-center`}>
                {navItems.map((item, index) => renderNavItem(item, index))}
            </ul>
        </nav>
    );
};

export default Navbar2;
