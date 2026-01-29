import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Music2, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 p-10 font-[sans-serif] mt-10 tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="lg:flex lg:items-center">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            aria-label="Go to homepage"
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/the-ashthetik%2Flogo%20horizontal%20white.webp?alt=media&token=f0f2d000-6b61-4b80-b2a7-6736fb701479"
              height={60}
              width={200}
              alt="The Asthetik Clinic logo"
              priority={false}
            />
          </Link>
        </div>

        {/* Social Links */}
        <div className="lg:flex lg:items-center">
          <ul className="flex space-x-6" aria-label="Social media links">
            <li>
              <Link
                href="https://www.facebook.com/theasthetikclinic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open The Asthetik Clinic on Facebook"
                className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Facebook className="h-5 w-5 text-white" aria-hidden="true" />
              </Link>
            </li>

            <li>
              <Link
                href="https://instagram.com/theasthetikclinic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open The Asthetik Clinic on Instagram"
                className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Instagram className="h-5 w-5 text-white" aria-hidden="true" />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.tiktok.com/@theasthetikclinic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open The Asthetik Clinic on TikTok"
                className="h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                {/* lucide doesn't have a tiktok icon in core; using Music2 as a safe icon */}
                <Music2 className="h-5 w-5 text-white" aria-hidden="true" />
              </Link>
            </li>

            <li>
              <Link
                href="https://wa.me/923458222263?text=Hello,%20I%20am%20contacting%20you%20through%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with The Asthetik Clinic on WhatsApp"
                className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <MessageCircle className="h-5 w-5 text-white" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">Pages</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/services" className="text-gray-300 hover:text-white text-sm">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/mental-aesthetics" className="text-gray-300 hover:text-white text-sm">
                Mental Aesthetic
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">Information</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/about-us" className="text-gray-300 hover:text-white text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white text-sm">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-300 text-sm mt-10">© TheAsthetik. All rights reserved.</p>
    </footer>
  );
}
