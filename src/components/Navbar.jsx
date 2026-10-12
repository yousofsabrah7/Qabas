import React, { useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import qabasLogo from "../assets/qabas logo 2.svg";

function Navbar() {
    const navLinks = [
        { name: "الرئيسية", path: "/" },
        { name: "المراحل", path: "/stages" },
        { name: "مشاريع قبس", path: "/projects" },
        { name: "الشركاء", path: "/partners" },
        { name: "تواصل", path: "/contact" },
    ];
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav
            dir="rtl"
            className=" 
                sticky 
                top-0 
                z-50 
                flex 
                items-center 
                justify-between
                px-8
                bg-white/70    
                backdrop-blur-md
                border-b border-white/20 "
        >

            {/* Logo */}
            <div className="rightSide">
                <img
                    src={qabasLogo}
                    alt="Qabas Logo"
                    className="w-[120px] md:w-[165px] h-[92.813px] shrink-0 object-contain"
                />
            </div>

            {/* Links */}
            <div className="leftSide flex items-center">
                <button className="md:hidden "
                    onClick={() => { setIsOpen(!isOpen) }}
                    aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `p-2 whitespace-nowrap border-b-2 transition-colors duration-300 ${isActive
                                        ? "border-yellow-normal"
                                        : "border-transparent hover:border-yellow-normal"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}

                    {/* CTA */}
                    <li>
                        <NavLink
                            to="/joinUs"
                            className="
                flex items-center justify-center gap-4
                whitespace-nowrap
                bg-yellow-normal
                rounded-3xl
                px-8 py-3
                transition-transform duration-300
                hover:-translate-y-2
                "
                        >
                            ابدأ رحلتك
                            <ArrowLeft size={24} />
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute z-50  top-full right-0 w-full bg-white md:hidden">
                    <ul className="flex flex-col items-end gap-4 mx-8 py-6">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block p-2 border-b-2 transition-colors duration-300 ${isActive
                                            ? "border-yellow-normal"
                                            : "border-transparent hover:border-yellow-normal"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}

                        <li>
                            <NavLink
                                to="/joinUs"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 bg-yellow-normal rounded-3xl px-8 py-3"
                            >
                                ابدأ رحلتك
                                <ArrowLeft size={20} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;