"use client";
import Image from "next/image";
import imageLogo from "/public/logo.png";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  
  const [toggle, setToggle] = useState(false);

  
  return (
    <>
      <div className="bg-white">
        <div className=" fixed hidden md:grid bg-slate-900  grid-cols-2 z-20 h-16 w-full ">
          {/* Phone and Email Section */}
          <div className=" flex  pl-2 ">
            <div className="flex px-6   items-center space-x-2">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="h-4 w-4 text-blue-500"
              >
                <path d="M511.1 379.5c-1.1 10.4-5.9 25.9-11.4 35.1-1.5 2.7-5.6 5.1-8.6 6.6-15.5 7.5-45.5 16.1-45.5 16.1-92.1 12.6-197.7-52.1-276.9-131.3S-5.7 102.1 7 10.1C7 10.1 15.6-20 23.1-35.5c1.5-3 4.6-7.1 7.3-8.6C39.6-50 55.1-54.8 65.5-55.9c18.1-1.9 39.5-3.6 61.3 3.3 29.6 9.4 50.1 47.8 55.7 64.4 6.4 19.5 12.2 37.4 3.9 49.1-2.1 2.9-6.6 7.4-11.8 9.4-7.5 2.5-23.2 9.2-23.2 9.2 3.6 41.2 38.5 88.8 77.5 127.8 39 39 86.6 73.8 127.8 77.5 0 0 6.7-15.7 9.2-23.2 2-5.2 6.5-9.7 9.4-11.8 11.7-8.3 29.6-2.5 49.1 3.9 16.6 5.6 55 26.1 64.4 55.7 6.9 21.9 5.2 43.2 3.3 61.3z" />
              </svg>
              <Link href="tel:+923458222263">
                <span className="text-white text-sm">+92-345-8222263</span>
              </Link>
            </div>

            <div className="flex px-6 mx-auto  items-center space-x-2">
              {/* Email Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="h-4 w-4 text-red-500"
              >
                <path d="M502.3 190.8L327.4 338.3c-23.6 19.5-60.1 19.5-83.7 0L9.7 190.8C3.8 185.8 0 178.2 0 170.2V456c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56V170.2c0-8-3.8-15.6-9.7-20.6zM256 320c12.5 0 24.9-4.3 34.8-12.9L496 144v-40c0-30.9-25.1-56-56-56H72c-30.9 0-56 25.1-56 56v40l205.2 163.2c9.9 7.8 22.3 12.9 34.8 12.9z" />
              </svg>
              <Link href="mailto:info@yourwebsite.com">
                <span className="text-white text-sm">info@theasthetik.com</span>{" "}
              </Link>
            </div>
          </div>
          <div className=" flex justify-end pr-6 space-x-3 items-center">
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/theasthetikclinic"
              target="_blank"
            >
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                    className="h-5 w-5"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/theasthetikclinic"
              target="_blank"
            >
              <div className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-700 transition-colors duration-300">
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* TikTok */}
            <Link
              href="https://www.tiktok.com/@theast48?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                  >
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Whatsapp */}
            <Link
                  href="https://wa.me/923458222263?text=Hello,%20I%20am%20contacting%20you%20through%20your%20website.%20Please%20verify."
                  target="_blank"
                >
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-700 transition-colors duration-300">
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>

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
