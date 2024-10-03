import cl from "../../assets/cl5.svg";
import logo from "../../assets/logos.png";
import { FaFacebook } from "react-icons/fa6";
import { FaXbox } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

const FooterHome = () => {
  return (
    <footer className="bg-white relative">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-teal-600">
              <img src={logo} className="" alt="Logo" />
            </div>

            <p className="mt-4 max-w-xs text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>

            
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-1 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-lg text-gray-900">Quick Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    1on1 Coaching{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Company Review{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    HR Consulting{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    SEO Optimisation{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Follow Us</p>
            <div className=" flex gap-6 mt-6">
                <FaXbox size={32}/>
                <FaFacebook size={32}/>
                <FaInstagramSquare size={32}/>
            </div>
            </div>

            <div>
              <p className="font-medium textlg text-gray-900">Contact</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 flex items-center gap-2 transition hover:opacity-75 text-xl"
                  >
                   <FaPhone size={20} className="text-[#22C55E]"/>
                   0123456789                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 flex items-center gap-2 transition hover:opacity-75 text-xl"
                  >
                   <MdEmail size={20} className="text-[#22C55E]"/>
                   Lorem@gmail.com                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 flex items-center gap-2 transition hover:opacity-75 text-xl"
                  >
                   <FaLocationPin size={20} className="text-[#22C55E]"/>
                   1230, Lorem Ipsum                  </a>
                </li>

              
              </ul>
            </div>

           
          </div>
        </div>

        <div className=" relative bg-[#1E293B] rounded-lg z-20 py-4 flex justify-center ">
          <p className="z-20 text-white">
            &copy; Copyright 2024, All Rights Reserved
          </p>
        </div>
      </div>
      <img src={cl} className=" absolute left-0 z-10 h-[300px]  bottom-0" alt="" />
    </footer>
  );
};

export default FooterHome;
