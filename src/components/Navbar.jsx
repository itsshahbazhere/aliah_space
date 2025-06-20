import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navItems = ["Home", "Team", "LearnSpace", "ExamSpace"];
    const navigate = useNavigate();
return (

    <div className="w-full border-b">
        <div className="flex w-11/12 justify-evenly py-3 text-lg">
        {navItems.map((item, index) => (
            <div key={index} className="p-1 px-2 ">
                <NavLink to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</NavLink>
            </div>
        ))}

        <div className="p-1 px-2" onClick={()=>navigate('/admin-login')}>Admin Login</div>
    </div>
    </div>
);
};

export default Navbar;
