// components/Navbar.tsx
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <>
        <div>
            <ul className="flex space-x-5 h-0">
                <li>
                    <Link href='/' className='hover:bg-white hover:text-black hover:rounded-md'>Home</Link>
                </li>
                <li>
                    <Link href='/About' className="hover:bg-white hover:text-black hover:rounded-md">About Project</Link>
                </li>
                <li>
                    <Link href='/login' className='hover:bg-white hover:text-black hover:rounded-md'>Login</Link>
                </li>
            </ul>            
        </div>
    </>
  );
};
export default Navbar;
