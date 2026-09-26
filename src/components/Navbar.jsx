import React from "react";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const navLinks = [
        { name: "الرئيسية", path: "/" },
        { name: "المراحل", path: "/stages" },
        { name: "مشاريع قبس", path: "/projects" },
        { name: "الشركاء", path: "/partners" },
        { name: "تواصل", path: "/contact" },
    ];

    return (
        <nav
            dir="rtl"
            className="flex items-center justify-between px-8"
        >
            {/* Logo */}
            <div className="rightSide">
                <img
                    src="/src/assets/image.png"
                    alt="Qabas Logo"
                    className="w-[165px] h-[92.813px] shrink-0 object-contain"
                />
            </div>

            {/* Links */}
            <div className="leftSide flex items-center">
                <ul className="flex items-center gap-8">
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
        </nav>
    );
}

export default Navbar;