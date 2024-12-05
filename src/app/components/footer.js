import Image from "next/image";
import imageLogo from "/public/logo.png";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 p-10 font-[sans-serif] mt-10 tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:flex lg:items-center">
          <Link
            href="/"
            className="flex items-center space-x-3  rtl:space-x-reverse"
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/the-ashthetik%2Flogo%20horizontal%20white.webp?alt=media&token=f0f2d000-6b61-4b80-b2a7-6736fb701479"
              height={60}
              width={200} // Adjust the width according to the image ratio
              alt="Main Logo"
            />
          </Link>
        </div>
        <div className="lg:flex lg:items-center">
          <ul className="flex space-x-6">
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
              href="https://www.tiktok.com/@theasthetikclinic"
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
                  href="https://wa.me/923458222263?text=Hello,%20I%20am%20contacting%20you%20through%20your%20website."
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
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">Pages</h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white text-sm"
              >
                All Services
              </Link>
            </li>
            <li>
              <Link
                href="/mental-aesthetics"
                className="text-gray-300 hover:text-white text-sm"
              >
                Mental Aesthetic
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white text-sm"
              >
                Contact US
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">Information</h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="/about-us"
                className="text-gray-300 hover:text-white text-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="text-gray-300 hover:text-white text-sm"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <a href="" className="text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-gray-300 text-sm mt-10">
        © TheAsthetik. All rights reserved.
      </p>
    </footer>
  );
}
