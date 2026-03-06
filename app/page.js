"use client";
import Link from "next/link"
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RiPlayReverseMiniFill } from "react-icons/ri";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="">
      <header className="bg-black text-white">
        <div className="flex justify-between items-center p-4">
          <button
            className="sm:hidden text-2xl"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${menuOpen ? "block" : "hidden"} sm:flex sm:justify-between sm:items-center p-4 space-y-4 sm:space-y-0 sm:space-x-6`}
        >
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-light">
            <a href="/">HOME</a>
            <a href="/agent">AGENT</a>
            <a href="/contact">CONTACT</a>
            <a href="/BookOnline ">BOOK ONLINE</a>
          </nav>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <a className="text-2xl border-amber-50"><CiSearch /></a>
            <a className="text-2xl"><FaCartArrowDown /></a>
            <button className="pl-4 pr-4 pt-1 p-1 border-solid border-white rounded-xl hover:bg-white hover:text-black font-extralight border-2 transition duration-300">
              LOGIN
            </button>
            <button className="text-white bg-orange-600 font-extralight pr-4 pl-4 pt-1 pb-1 rounded-xl p-1 border-orange-600">
              JOIN
            </button>
          </div>
        </div>
      </header>
      <hr className="border-t-2 border-orange-300" />
      <div className="text-center bg-[url('/images/six.avif')] bg-cover bg-center h-screen"></div>
      <div className="bg-blue-900  pb-10 pt-10 pl-10 pr-10 relative -mt-40 -pr-20 ml-85">
        <h1 className="text-2xl font-extrabold font-serif w-80 text-white ">STUNNING 6 BED HOUSE IN THE HEART OF THE CITY</h1>
        <p className="mt-3 w-70 text-white ">Located in the heart of the city, this stunning 6-bedroom house offers modern comfort and elegant design.</p>
        <hr className="border-t-2 w-1/1 text-white 500 mt-3" />
        <p className="mt-5 text-white ">$650,000</p>
        <button className="mt-5  text-white pr-4 pl-4 pt-1 pb-1 border-2 border-blue-500  hover:text-black font-extralight  transition duration-300">All Sales</button>
      </div>
      <section>
        <div className="mt-20">
          <h1 className="text-4xl text-center font-extrabold font-serif">LATEST PROPERTIES FOR SALE </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-15">
          <div className="pt-10">
            <img src="/images/one.avif" alt="house1" className="w-full h-80 object-cover" />
            <h4 className="mt-5 text-blue-600">MADINA AVANUE </h4>
            <p className="mt-3 text-blue-400">Price: $250,000</p>
            <p className="mt-3 font-extralight ">3 Bedrooms</p>
            <p className="mt-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <button className="mt-5  text-blue-700 pr-4 pl-4 pt-1 pb-1 p-1 border-blue-600 border-solid hover:bg-white hover:text-black font-extralight border-2 transition duration-300">Read More</button>
          </div>
          <div className="pt-10">
             <img src="/images/two.avif" alt="house1" className="w-full h-80 object-cover" />
             <h4 className="mt-5 text-blue-600">ABOKOBI AVANUE </h4>
            <p className="mt-3 text-blue-400">Price: $250,000</p>
            <p className="mt-3 font-extralight  ">4 Bedrooms</p>
            <p className="mt-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <button className="mt-5  text-blue-700 pr-4 pl-4 pt-1 pb-1 p-1 border-blue-600 border-solid hover:bg-white hover:text-black font-extralight border-2 transition duration-300">Read More</button>
          </div>
          <div className="pt-10">
             <img src="/images/three.avif" alt="house1" className="w-full h-80 object-cover" />
             <h4 className="mt-5 text-blue-600">DANSOMAN AVANUE </h4>
            <p className="mt-3 text-blue-400">Price: $250,000</p>
            <p className="mt-3 font-extralight ">6 Bedrooms</p>
            <p className="mt-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <button className="mt-5  text-blue-700 pr-4 pl-4 pt-1 pb-1 p-1 border-blue-600 border-solid hover:bg-white hover:text-black font-extralight border-2 transition duration-300">Read More</button>
          </div>
        </div>
        <div>
          <div className="mt-20 text-center font-serif text-2xl font-extrabold pb-8">LATEST RENTAL PROPERTIES</div>
        </div>
        <section className="flex flex-col md:flex-row gap-10 bg-blue-950 pb-20 relative ">
          <div>
            <img src="/images/four.avif" alt="house1" className="w-80 h-96 object-cover ml-85 pt-10 relative z-10 -mt-14" />
          </div>
          <div className="mr-10 pt-18">
            <h4 className="mt-5 text-white pt-5 text-1xl font-bold font-serif ">DANSOMAN AVANUE </h4>
            <p className="pt-3 text-orange-600">4 Bedrooms</p>
            <p className="w-80 pt-3 text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
          </div>
        </section>
        <section className="bg-blue-800 flex flex-col md:flex-row gap-10 relative">
          <div className="ml-95 pt-9">
            <h4 className="mt-5 text-white pt-5 text-1xl font-bold font-serif ">BOTWE AVANUE </h4>
            <p className="pt-3 text-orange-600">2 Bedrooms</p>
            <p className="w-80 text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
          </div>
          <div>
            <img src="/images/five.avif" alt="house1" className="w-80 h-100 object-cover pt-15 " />
          </div>
        </section>
        <h1 className="text-center text-blue-950 font-serif text-3xl mt-20">REALTORS YOU CAN TRUST</h1>
        <section className="flex flex-col sm:flex-row gap-10 pt-18 pb-20 justify-center items-center">
          <div className="">
            <p className="text-6xl text-orange-500 align-center justify-items-center"><FaRegFileAlt /></p>
            <h3 className="w-45 ">
              FREE REGISTRATION  NO HIDDEN FEES 
            </h3>
            <p className="w-90">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
          <div>
            <p className="text-6xl text-orange-500 align-center justify-items-center"><FaLaptopHouse /></p>
            <h3 className="w-45">FREE REGISTRATION 
              NO HIDDEN FEES 
            </h3>
            <p className="w-90">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
          <div>
            <p className="text-6xl text-orange-500 align-center justify-items-center"><CiLocationOn /></p>
            <h3 className="w-45">FREE REGISTRATION 
              NO HIDDEN FEES 
            </h3>
            <p className="w-90">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
        </section>
        <section className="text-center bg-[url('/images/six.avif')] pb-10 mb-50 bg-fixed bg-cover bg-center bg-black/40   ">
          <h1 className="text-center text-white font-serif text-3xl mt-20 pt-20">WHAT OUR CLIENTS THINK</h1>
          <div className="flex flex-col md:flex-row pt-18 gap-10 justify-center p-4"> 
          <div className="text-white ">
            <p className="text-3xl pt-5 align-center justify-items-center text-black "><RiPlayReverseMiniFill /></p>
            <p className="pt-5 ">Excellent service from start to finish. They delivered exactly what they promised, and I would highly recommend them to anyone looking for quality and reliability.”</p>
            <h4 className="pt-5 font-serif font-bold">Desmond Amenyo</h4>
          </div>
          <div className="text-white ">
            <p className="text-3xl pt-5 align-Items-center justify-items-center text-black"><RiPlayReverseMiniFill /></p>
            <p className="pt-5">Excellent service from start to finish. They delivered exactly what they promised, and I would highly recommend them to anyone looking for quality and reliability.”</p>
            <h4 className="pt-5 font-serif font-bold">Desmond Amenyo</h4>
          </div>
          <div className="text-white ">
            <p className="text-3xl pt-5 align-Items-center justify-items-center text-black"><RiPlayReverseMiniFill /></p>
            <p className="pt-5">Excellent service from start to finish. They delivered exactly what they promised, and I would highly recommend them to anyone looking for quality and reliability.”</p>
            <h4 className="pt-5 font-serif font-bold ">Desmond Amenyo</h4>
          </div>
          </div>
        </section>
        <div>
          <h1 className="text-center text-blue-950 font-serif text-3xl mt-20">CONTACT US</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-evenly p-4">
          <div>
            <p className="text-2xl font-serif pt-5">ADDRESS</p>
            <p className="pt-3">Lakeside  Street, Accra, Ghana</p>
            <h3 className="pt-50"> TO SPEAK WITH ANY AGENT,</h3>
            <h3 className="pb-5">PLEASE OR EMAIL</h3>
            <p className="text-gray-400">Email: desmondamenyo763@gmail.com</p>
            <p className="text-gray-400">Tel:+233 592854304</p>
            <p className="text-gray-400">Clever@boss</p>
          </div>
          <form className="flex flex-col gap-6 mt-10 mb-20">
            <div className="flex gap-5 ">
              <input type="text" placeholder="First Name" className="border-solid border-2 border-gray-300 p-2 rounded-md" />
             <input type="text" placeholder="Last Name" className="border-solid border-2 border-gray-300 p-2 rounded-md" />
            </div>
            <div className=" flex gap-6 ">
                <input type="text" placeholder="Phone Number" className="border-solid border-2 border-gray-300 p-2 rounded-md" />
            <input type="email" placeholder="Email" className="border-solid border-2 border-gray-300 p-2 rounded-md" />
            </div>
            <input type="text" placeholder="subject" className="border-solid border-2 border-gray-300 p-2 rounded-md" />
            <textarea placeholder="Message" className="border-solid border-2 border-gray-300 p-2 rounded-md"></textarea>
            <button className="bg-orange-600 text-white font-extralight pr-4 pl-4 pt-1 pb-1 p-1 border-orange-600 border-solid w-max">Submit</button>
          </form>
        </div>
        <section>
            <hr className="border-t-2 border-orange-300" />
            <div>
            <div className="text-center text-gray-400 pt-5">Copyright © 2026. All rights reserved.</div>
            </div>
        </section>
      </section>
    </main>
  );
}
