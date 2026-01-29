"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TopBar from "./TopBar";
import imageLogo from "/public/logo.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => setToggle(false);
  const toggleMenu = () => setToggle((v) => !v);

  // Close on ESC + close on outside click
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    const onMouseDown = (e) => {
      if (!toggle) return;
      if (navRef.current && !navRef.current.contains(e.target)) closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [toggle]);

  // Prevent body scroll when menu open (mobile)
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  return (
    <>
      <div className="bg-white">
        <TopBar />

        <nav
          ref={navRef}
          className="fixed z-20 md:top-16 lg:top-16 w-full bg-white border-gray-200 dark:bg-gray-900"
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center space-x-3 rtl:space-x-reverse focus:outline-none focus:ring-2 focus:ring-blue-600/40 rounded"
              aria-label="Go to homepage"
            >
              <Image
                src={imageLogo}
                width={180}
                height={48}
                alt="The Asthetik Clinic logo"
                priority={false}
              />
            </Link>

            {/* Right side actions */}
            <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
              {/* Appointment CTA */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                aria-label="Book an appointment"
              >
                Book Appointment
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center w-11 h-11 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded={toggle ? "true" : "false"}
                aria-label={toggle ? "Close main menu" : "Open main menu"}
              >
                <span className="sr-only">
                  {toggle ? "Close main menu" : "Open main menu"}
                </span>

                {/* Hamburger / Close Icon */}
                {toggle ? (
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile backdrop */}
            {toggle ? (
              <div
                className="fixed inset-0 bg-black/40 md:hidden"
                aria-hidden="true"
                onClick={closeMenu}
              />
            ) : null}

            {/* Menu */}
            <div
              id="navbar-cta"
              className={
                toggle
                  ? "relative items-center justify-between w-full md:flex md:w-auto md:order-1"
                  : "relative items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              }
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="block py-3 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </Link>
                </li>

                {/* Services (dropdown on desktop) */}
                <li className="group relative">
                  <Link
                    href="/services"
                    onClick={closeMenu}
                    className="block py-3 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </Link>

                  {/* Desktop dropdown */}
                  <div className="absolute shadow-lg invisible md:group-hover:visible bg-white px-8 py-4 lg:top-6 z-50">
                    <div className="grid grid-cols-1 py-8 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-16 w-max">
                      <ul className="space-y-4 border-l-4 border-blue-800 pl-3">
                        <li>
                          <Link
                            href="/services/medical-grade-facial"
                            className="text-black block hover:text-blue-700"
                          >
                            Medical Grade Facial
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/skin-laser-treatment"
                            className="text-black block hover:text-blue-700"
                          >
                            Skin Laser Treatment
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/laser-hair-removal"
                            className="text-black block hover:text-blue-700"
                          >
                            Laser Hair Removal
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/chemical-peels"
                            className="text-black block hover:text-blue-700"
                          >
                            Chemical Peels
                          </Link>
                        </li>
                      </ul>

                      <ul className="space-y-4 border-l-4 border-blue-800 pl-3">
                        <li>
                          <Link
                            href="/services/thread-lifts"
                            className="text-black block hover:text-blue-700"
                          >
                            Thread Lifts
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/botox-treatment"
                            className="text-black block hover:text-blue-700"
                          >
                            Botox Treatment
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/fillers-treatment"
                            className="text-black block hover:text-blue-700"
                          >
                            Fillers Treatments
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/iv-vitamin-therapy"
                            className="text-black block hover:text-blue-700"
                          >
                            IV Vitamin Therapy
                          </Link>
                        </li>
                      </ul>

                      <ul className="space-y-4 border-l-4 border-blue-800 pl-3">
                        <li>
                          <Link
                            href="/services/mesotherapy"
                            className="text-black block hover:text-blue-700"
                          >
                            Mesotherapy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/body-contouring"
                            className="text-black block hover:text-blue-700"
                          >
                            Body Contouring
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/prp-treatment"
                            className="text-black block hover:text-blue-700"
                          >
                            PRP Treatment
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/hifu-treatment"
                            className="text-black block hover:text-blue-700"
                          >
                            HIFU Treatment
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Mental Aesthetics */}
                <li className="group relative">
                  <Link
                    href="/mental-aesthetics"
                    onClick={closeMenu}
                    className="block py-3 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Mental Aesthetics
                  </Link>

                  {/* Desktop dropdown */}
                  <div className="absolute shadow-lg invisible md:group-hover:visible bg-white px-8 py-4 lg:top-6 z-50">
                    <div className="grid grid-cols-1 py-8 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-16 w-max">
                      <ul className="space-y-4 border-l-4 border-blue-800 pl-3">
                        <li>
                          <Link href="/mental-aesthetics/codependency" className="text-black block hover:text-blue-700">
                            Codependency
                          </Link>
                        </li>
                        <li>
                          <Link href="/mental-aesthetics/narcissism" className="text-black block hover:text-blue-700">
                            Narcissism
                          </Link>
                        </li>
                        <li>
                          <Link href="/mental-aesthetics/depression" className="text-black block hover:text-blue-700">
                            Depression
                          </Link>
                        </li>
                      </ul>

                      <ul className="space-y-4 border-l-4 border-blue-800 pl-3">
                        <li>
                          <Link
                            href="/mental-aesthetics/post-traumatic-stress-disorder"
                            className="text-black block hover:text-blue-700"
                          >
                            PTSD
                          </Link>
                        </li>
                        <li>
                          <Link href="/mental-aesthetics/childhood-abuse" className="text-black block hover:text-blue-700">
                            Childhood Abuse
                          </Link>
                        </li>
                        <li>
                          <Link href="/mental-aesthetics/dissociation" className="text-black block hover:text-blue-700">
                            Dissociation
                          </Link>
                        </li>
                      </ul>

                      <ul className="space-y-4 border-l-4 border-blue-800 pl-3">
                        <li>
                          <Link href="/mental-aesthetics/communication" className="text-black block hover:text-blue-700">
                            Communication
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/mental-aesthetics/difficult-conversation"
                            className="text-black block hover:text-blue-700"
                          >
                            Difficult Conversation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/mental-aesthetics/emotional-intelligence"
                            className="text-black block hover:text-blue-700"
                          >
                            Emotional Intelligence
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/mental-aesthetics/addiction-treatment"
                            className="text-black block hover:text-blue-700"
                          >
                            Addiction Treatment
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="/about-us"
                    onClick={closeMenu}
                    className="block py-3 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block py-3 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
