"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [mobileView, setMobileView] = useState(false);

  const toggleMenu = () => {
    setMobileView(!mobileView);
  };

  return (
    <nav>
      <div className="h-14 flex justify-between items-center shadow-md border-b-2 border-gray-600/40 text-indigo-400">
        <Link href="/" className="text-lg cursor-pointer ml-5">
          <Image src="/logo.svg" height={60} width={60} alt="logo" />
        </Link>
        <ul className="hidden md:flex md:items-center">
          <li className="hover:text-indigo-600 p-4 text-lg">
            <Link href="/" className="">
              home
            </Link>
          </li>
          <li className="hover:text-indigo-600 p-4 text-lg">
            <Link href="/preview" className="">
              preview
            </Link>
          </li>
          <li className="hover:text-indigo-600 p-4 text-lg">
            <Link href="/register" className="">
              register
            </Link>
          </li>
          <li className="hover:text-indigo-600 p-4 text-lg">
            <Link href="/contact" className="">
              contact
            </Link>
          </li>
          <li className="hover:text-indigo-600 p-4 text-lg">
            <Link href="/about" className="">
              about
            </Link>
          </li>
          <li className="p-4 text-lg">
            <Link href="/login">
              <button className="btn hover:text-indigo-600">sign in</button>
            </Link>
          </li>
        </ul>
        <svg
          className="hover:cursor-pointer md:hidden"
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          height="35"
          viewBox="0 -960 960 960"
          width="45"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      {/* mobile navbar */}
      <div className="">
        <ul
          className={`md:hidden ${
            mobileView
              ? "z-20 flex flex-col fixed top-0 right-0 w-4/5 h-full bg-white/60 shadow-md backdrop-blur-sm"
              : "hidden"
          }`}
        >
          <li onClick={toggleMenu} className="cursor-pointer py-4 px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35"
              viewBox="0 -960 960 960"
              width="35"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          <li className="hover:text-indigo-600 py-4 px-10 text-lg">
            <Link href="/" className="">
              home
            </Link>
          </li>
          <li className="hover:text-indigo-600 py-4 px-10 text-lg">
            <Link href="/journal" className="">
              preview
            </Link>
          </li>
          <li className="hover:text-indigo-600 py-4 px-10 text-lg">
            <Link href="/register" className="">
              register
            </Link>
          </li>
          <li className="hover:text-indigo-600 py-4 px-10 text-lg">
            <Link href="/contact" className="">
              contact
            </Link>
          </li>
          <li className="hover:text-indigo-600 py-4 px-10 text-lg">
            <Link href="/about" className="">
              about
            </Link>
          </li>
          <li className="py-4 px-10 text-lg">
            <button className="btn hover:bg-purple-600 text-white">
              login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
