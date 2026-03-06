import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";


export default function AgentPage() {
  return (
    <main className=" justify-center">
        <section className="bg-blue-950">
        <h1 className="  text-2xl font-serif text-center pt-10 text-white  ">OUR AGENT </h1>
        <section className="grid grid-cols-3 gap-5 justify-evenly p-10">

        <div>
            <img src="images/eight.avif" alt="Agent Image" style={{ width: '300px', height: '300px' }} />
            <p className="mt-3 text-lg font-bold text-white ">Lawerence Amenyo</p>
            <p className="mt-3 text-yellow-300">Real Estate Agent</p>
        </div>
        <div>
            <img src="images/nine.avif" alt="Agent Image" style={{ width: '300px', height: '300px' }} />
            <p className="mt-3 text-lg font-bold text-white ">Lawrencia Amenyo</p>
            <p className="mt-3 text-yellow-300">Sales Agent</p>
        </div>
        <div>
            <img src="images/ten.avif" alt="Agent Image" style={{ width: '300px', height: '300px' }} />
            <p className="mt-3 text-lg font-bold text-white ">Richard Oduro</p>
            <p className="mt-3 text-yellow-300">Sales Executive</p>
        </div>
        <div>
            <img src="images/eleven.avif" alt="Agent Image" style={{ width: '300px', height: '300px' }} />
            <p className="mt-3 text-lg font-bold text-white ">Sarah Johnson</p>
            <p className="mt-3 text-yellow-300">Real Estate Agent</p>
        </div>
        <div>
            <img src="images/twelve.avif" alt="Agent Image" style={{ width: '300px', height: '300px' }} />
            <p className="mt-3 text-lg font-bold text-white ">Lawrencia Amenyo</p>
            <p className="mt-3 text-yellow-300">Real Estate Agent</p>
        </div>
        <div>
            <img src="images/seven.avif" alt="Agent Image" style={{ width: '300px', height: '300px' }} />
            <p className="mt-3 text-lg font-bold text-white ">John Doe</p>
            <p className="mt-3 text-yellow-300">Real Estate Agent</p>
        </div>
        </section>
        </section>
        <section className="flex pb-9 pt-9 px-10 bg-gray-400 p-10">
            <div className="pt-4 text-white ">Copyright © 2026. All rights reserved.</div>
            <div className="flex gap-4 ml-auto pt-4 text-white ">
                <p className="text-2xl "><FaFacebook /></p>
                <p className="text-2xl "><AiFillTwitterCircle /></p>
                <p className="text-2xl "><FaSquareInstagram /></p>
            </div>
        </section>
        
    </main>
  );
}