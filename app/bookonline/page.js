import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


export default function BookOnlinePage() {
    return(
        <main>
            <section className="">
                <div className="flex pt-10 gap-8 justify-center align-itms-center">
                    <ul className="flex gap-8">

                    <li>All Service </li>
                    <li>Sales</li>
                    <li>Rentals</li>
                    </ul>
                </div>
                <section className="grid grid-cols-3 gap-5 p-30">
                    <div className="border-2 border-blue-300 pb-10">
                        <img src="images/sixteen.avif" alt="Book Online Image" className="" />
                        <p className="mt-4 pb-2 mr-12 font-bold">Madina Street </p>
                        <p className="pb-5">1 hr</p>
                        <p className="pb-2">Price: $10013</p>
                        <button className="border-2 border-blue-400 pl-4 pr-4 mr-9 py-1">Book Now</button>
                    </div > 
                     <div className="border-2 border-blue-300 pb-10">
                        <img src="images/thirteen.avif" alt="Book Online Image" className=""/>
                        <p className="mt-4 pb-2 mr-12 font-bold">Book Online</p>
                        <p className="pb-5">1HR</p>
                        <p className="pb-2">Price: $10013</p>  
                        <button className="border-2 border-blue-400 pl-4 pr-4 mr-9 py-1">Book Now</button>
                    </div> 
                     <div className="border-2 border-blue-300 pb-10">
                        <img src="images/forteen.avif" alt="Book Online Image" className="" />
                        <p className="mt-4 pb-2 mr-12 font-bold">Book Online</p>
                        <p className="pb-5">1HR</p>
                        <p className="pb-2">Price: $10013</p>
                        <button className="border-2 border-blue-400 pl-4 pr-4 mr-9 py-1">Book Now</button>
                    </div> 
                     <div className="border-2 border-blue-300 pb-10">
                        <img src="images/fifteen.avif" alt="Book Online Image" className="" />
                        <p className="mt-4 pb-2 mr-12 font-bold">Book Online</p>
                        <p className="pb-5">1HR</p>
                        <p className="pb-2">Price: $10013</p>
                        <button className="border-2 border-blue-400 pl-4 pr-4 mr-9 py-1">Book Now</button>
                    </div> 
                     <div className="border-2 border-blue-300 pb-10">
                        <img src="images/seventeen.avif" alt="Book Online Image" className=""/>
                        <p className="mt-4 pb-2 mr-12 font-bold">Book Online</p>
                        <p className="pb-5">1HR</p>
                        <p className="pb-2">Price: $10013</p>
                        <button className="border-2 border-blue-400 pl-4 pr-4 mr-9 py-1">Book Now</button>
                    </div> 
                    <div className="border-2 border-blue-300 pb-10">
                        <img src="images/thirteen.avif" alt="Book Online Image" className="" />
                        <p className="mt-4 pb-2 mr-12 font-bold">Book Online</p>
                        <p className="pb-5">1HR</p>
                        <p className="pb-2">Price: $10013</p>
                        <button className="border-2 border-blue-400 pl-4 pr-4 mr-9 py-1">Book Now</button>
                    </div> 
                    <div className="border-2 border-blue-300 pb-10">
                        <img src="images/fifteen.avif" alt="Book Online Image" className="" />
                        <p className="mt-4 pb-2 mr-12 font-bold">Book Online</p>
                        <p className="pb-5">1HR</p>
                        <p className="pb-2">Price: $10013</p>
                        <button className="border-2 border-blue-400 pl-4 pr-4 mr-9 py-1">Book Now</button>
                    </div> 
                    <div className="border-2 border-blue-300 pb-10">
                        <img src="images/sixteen.avif" alt="Book Online Image" className="" />
                        <p className="mt-4 pb-2 mr-12 font-bold">Book Online</p>
                        <p className="pb-5">1HR</p>
                        <p className="pb-2">Price: $10013</p>
                        <button className="border-2 border-blue-400 pl-4 pr-4 mr-9 py-1">Book Now</button>   
                    </div> 
                    <div className="border-2 border-blue-300 pb-10">
                        <img src="images/eighteen.avif" alt="Book Online Image" className="" />
                        <p className="mt-4 pb-2 mr-12 font-bold">Book Online</p>
                        <p className="pb-5">1HR</p>
                        <p className="pb-2">Price: $10013</p>
                        <button className="border-2 border-blue-400 pl-4 pr-4 mr-9 py-1">Book Now</button>
                    </div>                
                </section>
            </section>
            <section className="flex pb-9 pt-9 px-10 bg-gray-400 p-10">
                <div>
                    <p className="pt-4 text-white ">Copyright © 2026. All rights reserved.</p>
                </div>
                <div className="flex gap-4 ml-auto pt-4 text-white ">
                    <p className="text-2xl text-orange-600 "><FaSquareInstagram /></p>
                    <p className="text-2xl text-orange-600 "><FaFacebook /></p>
                    <p className="text-2xl text-orange-600"><FaInstagramSquare /></p>
                </div>
            </section>
        </main>
    )
}