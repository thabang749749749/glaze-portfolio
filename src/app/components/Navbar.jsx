"use client";
import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLinks = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  }

]


const Navbar = () => {
  const [navbarOpen, setNavbarOpen ] = useState(false);


  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-1000">

      <div className="flex flex-wrap items-center justify-between mx=auto px-4 py-2">
        <Link href="/">
          <Image 
            src="/images/logo.png"
            alt="logo image"
            width={150}
            height={150}                        
          />
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className="h-5 w-5" />
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    {navbarOpen ? <MenuOverlay links={navLinks} /> : null }
    </nav>
  );
};

export default Navbar;