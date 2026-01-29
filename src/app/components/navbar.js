"use client";
import Image from "next/image";
import imageLogo from "/public/logo.png";
import { useState } from "react";
import Link from "next/link";
import TopBar from "./TopBar";

export default function Navbar() {
  
  const [toggle, setToggle] = useState(false);

  
  return (
    <>
      <div className="bg-white">
       <TopBar/>

        <nav className="fixed  z-20 md:top-16 lg:top-16 w-full bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              onClick={() => setToggle(!toggle)}
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={imageLogo} height={48} alt="main logo" />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link href="/contact">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  APPOINTMENT
                </button>
              </Link>
              <button
                onClick={() => setToggle(!toggle)}
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                toggle
                  ? "items-center justify-between  w-full md:flex md:w-auto md:order-1"
                  : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              }
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li onClick={() => setToggle(!toggle)}>
                  <Link
                    href="/"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="group  relative"
                  onClick={() => setToggle(!toggle)}
                >
                  <Link
                    href="/services"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </Link>
                  <div className=" absolute shadow-lg invisible md:group-hover:visible bg-white px-8 py-4  lg:top-5 max-lg:top-6  z-50">
                    <div className="grid grid-cols-1  py-8   sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-16 w-max ">
                      <ul className="space-y-4 border-l-4 border-blue-800 ">
                        <li className="rounded px-2">
                          <Link
                            href="/services/medical-grade-facial"
                            className=" text-black  block"
                          >
                            Medical Grade Facial
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/services/skin-laser-treatment"
                            className=" text-black  block"
                          >
                            Skin Laser Treatment
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/services/laser-hair-removal"
                            className=" text-black  block"
                          >
                            Laser Hair Removal
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/services/chemical-peels"
                            className=" text-black block"
                          >
                            Chemical Peels
                          </Link>
                        </li>
                      </ul>
                      <ul className="space-y-4 border-l-4  border-blue-800">
                        <li className="rounded px-2">
                          <Link
                            href="/services/thread-lifts"
                            className=" text-black  block"
                          >
                            Thread Lifts
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/services/botox-treatment "
                            className=" text-black  block"
                          >
                            Botox Treatment
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/services/fillers-treatment"
                            className=" text-black  block"
                          >
                            Fillers Treatments
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/services/iv-vitamin-therapy"
                            className=" text-black block"
                          >
                            IV Vitamin Therapy
                          </Link>
                        </li>
                      </ul>
                      <ul className="space-y-4 border-l-4 border-blue-800 ">
                        <li className="rounded px-2">
                          <Link
                            href="/services/mesotherapy"
                            className=" text-black  block"
                          >
                            Mesotherapy
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/services/body-contouring"
                            className=" text-black  block"
                          >
                            Body Countouring
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/services/prp-treatment"
                            className=" text-black  block"
                          >
                            PRP Treatment
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/services/hifu-treatment"
                            className=" text-black block"
                          >
                            HIFU Treatment
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  className="group  relative"
                  onClick={() => setToggle(!toggle)}
                >
                  <Link
                    href="/mental-aesthetics"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Mental Aesthetics
                  </Link>
                  <div className="absolute shadow-lg invisible md:group-hover:visible bg-white px-8 py-4  lg:top-5 max-lg:top-8  z-50">
                    <div className="grid grid-cols-1  py-8   sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-16 w-max ">
                      <ul className="space-y-4 border-l-4 border-blue-800 ">
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/codependency"
                            className=" text-black  block"
                          >
                            Codependency
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/narcissism"
                            className=" text-black  block"
                          >
                            Narcissism
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/depression"
                            className=" text-black  block"
                          >
                            Depression
                          </Link>
                        </li>
                      </ul>
                      <ul className="space-y-4 border-l-4  border-blue-800">
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/Post-traumatic-stress-disorder"
                            className=" text-black  block"
                          >
                            PTSD
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/childhood-abuse"
                            className=" text-black  block"
                          >
                            Childhood abuse
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/dissociation"
                            className=" text-black  block"
                          >
                            Dissociation
                          </Link>
                        </li>
                      </ul>
                      <ul className="space-y-4 border-l-4 border-blue-800 ">
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/communication"
                            className=" text-black  block"
                          >
                            Communication
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/difficult-conversation"
                            className=" text-black  block"
                          >
                            Difficult conversation
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/emotional-Intelligence"
                            className=" text-black  block"
                          >
                            Emotional Intelligence
                          </Link>
                        </li>
                        <li className="rounded px-2">
                          <Link
                            href="/mental-aesthetics/addiction-treatment"
                            className=" text-black block"
                          >
                            Addiction treatment
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <Link
                    href="/about-us"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>

                <li onClick={() => setToggle(!toggle)}>
                  <Link
                    href="/contact"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
