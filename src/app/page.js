import Image from "next/image";
import imageLogo from "/public/logo.png";
import SkincareSpecialist from "/public/images/main/Aesthetic-&-Dermatologist-And-Skincare-Specialists-Clinic-in-Karachi.webp";
import BotoxTreatment from "/public/images/main/botox-treatment-clinic-in-karachi.webp";
import FillersTreatment from "/public/images/main/fillers-treatment-and-therapy-in-karachi.webp";
import HifuTreatment from "/public/images/main/hifu-treatment-for-face-in-karachi.webp";
import IVVitaminTherapy from "/public/images/main/IV-vitamin-therapy-skin-care-clinic-in-karachi.webp";
import LaserHairRemoval from "/public/images/main/laser-epilation-hair-removal-therapy-in-karachi.webp";
import MedicalGradeFacial from "/public/images/main/medical-grade-facial-in-karachi.webp";
import Mesotherapy from "/public/images/main/mesotherapy-for-skin-care-clinic-in-karachi.webp";
import Mesotherapyone from "/public/images/main/mesotherapy-for-skin-care-inkarachi.webp";
import PrpTreatment from "/public/images/main/prp-treatment-for-skin-in-karachi.webp";
import SkincareSpecialistOne from "/public/images/main/Skincare-Specialists-Clinic-in-Karachi.webp";
import ChemicalPeel from "/public/images/main/skin-chemical-peel-treatment-and-therapy-in-karachi.jpg";
import SkinLaserTreatment from "/public/images/main/Skin-laser-Treatment-in-karachi.webp";
import ThreadLift from "/public/images/main/thread-lift-treatment-and-therapy-in-karachi.webp";
import SkincareSpecialistTwo from "/public/images/main/Trusted-Aesthetic-&-Dermatologist-And-Skincare-Specialists-Clinic-in-Karachi.webp";
import Link from "next/link";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="bg-white">
      {/* hero section start  */}
      <section className="px-2  py-12 sm:py-32 md:py-32 lg:py-32 relative top-16 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">
                    Trusted Aesthetic & Dermatologist And{" "}
                  </span>
                  <span className="block  text-blue-700 lg:inline sm:px-2">
                    Skincare Specialists Clinic
                  </span>
                  <span className="block xl:inline"> in Karachi</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  At TheAesthetik, we are proud to be recognized as the best
                  aesthetic clinic in Karachi, dedicated to enhancing your
                  natural beauty and restoring confidence.
                </p>
                <div className="relative flex justify-around sm:justify-normal sm:flex-row sm:space-x-4">
                  <Link href="/about-us">
                    <button
                      type="button"
                      className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read More
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button
                      type="button"
                      className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-4 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      APPOINTMENT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full hidden md:block md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-2xl sm:rounded-xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <Image
                  src={SkincareSpecialist}
                  alt="Top Image"
                  width={800} // Replace with your desired width
                  height={600}
                  className="shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <Image
                src={Mesotherapyone}
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-indigo-600 font-semibold">
                Best Beauty Clinic in Karachi
              </h3>
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Skin and Beauty Treatments in Karachi
              </h2>
              <p className="mt-3 text-gray-600">
                At <strong>The Aesthetik</strong>, we deliver personalized{" "}
                <strong>skin and beauty treatments</strong> to help you look and
                feel your best. Whether you are battling stubborn acne, eczema,
                psoriasis, or rosacea, our expert dermatologists provide
                tailored solutions for every concern. Protect your health with
                our comprehensive skin cancer screenings, offering early
                detection by top dermatologists in Karachi. Trust The Aesthetik
                for advanced care and transformative results for all your skin
                needs.
              </p>
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* about start */}
      <section className="hidden sm:block bg-white mt-7 md:mt-0 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className=" flex items-center ">
              <div className="data w-full">
                <h3 className="font-manrope  font-semibold text-3xl lg:text-3xl text-black mb-9 max-lg:text-center relative">
                  Cosmetic Dermatology Services
                </h3>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl  mx-auto">
                  Experience premium Cosmetic Dermatology Services at The
                  Asthetik. Our expert dermatologists offer advanced skin
                  treatments, including Botox, fillers, laser therapy, and
                  medical facials, ensuring radiant, youthful skin. Trust us for
                  personalized care and cutting-edge solutions. Book your
                  consultation today at The Asthetik for flawless, healthy skin.
                </p>
                <div className="mt-4">
                  <Link href="/services">
                    <button
                      type="button"
                      className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="img-box px-20 py-4">
              <Image
                src={SkincareSpecialistTwo}
                alt="About Us tailwind page"
                className="shadow-2xl"
                layout="responsive"
                width={16} // Aspect ratio width
                height={9} // Aspect ratio height
              />
            </div>
          </div>
        </div>
      </section>
      {/* about end */}

      <div className=" mt-10 py-12 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-black ">
            Best Aesthetic <span className="text-indigo-600">Services</span>
          </h2>
          <h4 className="text-3xl sm:text-4xl font-bold text-black  px-3 mb-2">
            Botox Injections and Dermal Fillers
          </h4>
          <p className="text-gray-800 sm:hidden px-4  ">
            Looking for Botox injections and dermal fillers in Karachi? At The
            Asthetik, we offer expert non-surgical treatments to reduce
            wrinkles, restore volume, and enhance facial contours. Achieve a
            youthful, refreshed look with our safe, FDA-approved procedures.
            Book your consultation today for natural, long-lasting results
            tailored to your beauty goals!
          </p>
          <p className="text-gray-800 hidden sm:block  ">
            Looking for Botox injections and dermal fillers in Karachi? At The
            Asthetik, we offer expert non-surgical treatments to reduce
            wrinkles, restore volume, and enhance facial contours. Achieve a
            youthful, refreshed look with our safe, FDA-approved procedures.
            Book your consultation today for natural, long-lasting results
            tailored to your beauty goals!
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8">
          <div className=" md:w-5/12 px-4 sm:px-0">
            <Image
              className="rounded-2xl shadow-2xl"
              src={BotoxTreatment}
              alt=""
            />
          </div>
          <div className=" md:w-5/12 px-4 sm:px-0">
            <Image
              className="rounded-2xl shadow-2xl"
              src={Mesotherapy}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* athestic service */}
      <div className="py-12 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-black">
            Skin and Beauty Treatment{" "}
            <span className="text-indigo-600">Services in Karachi </span>
          </h2>
        </div>
      </div>
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <Link href="/services/skin-laser-treatment">
            <div className="bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={SkinLaserTreatment}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Skin Laser Treatments
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  Looking for the best Skin Laser Treatment? At The Asthetik, we
                  offer advanced laser skin rejuvenation, scar removal, and
                  pigmentation correction to give you flawless skin. Our expert
                  dermatologists use cutting-edge laser therapy for wrinkle
                  reduction, acne scar treatment, and skin tightening. Achieve
                  radiant, youthful skin with our safe and effective cosmetic
                  laser procedures.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/medical-grade-facial">
            <div className="bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={MedicalGradeFacial}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Medical Grade Facial
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  Experience the best Medical Grade Facial at The Asthetik
                  clinic, designed to deeply cleanse, exfoliate, and rejuvenate
                  your skin. Struggling with dull skin, acne scars, fine lines,
                  or uneven texture? Our advanced clinical facial treatments
                  target these concerns, restoring a youthful glow. Book your
                  professional skin rejuvenation session today for radiant,
                  healthy skin!
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/laser-hair-removal">
            <div className="bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={LaserHairRemoval}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Laser Hair Removal
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  Say goodbye to unwanted hair with Laser Hair Removal at The
                  Asthetik. Our advanced laser technology ensures smooth,
                  hair-free skin with long-lasting results. No more painful
                  waxing, shaving, or ingrown hairs—just safe, effective
                  treatment for all skin types. Experience a permanent solution
                  to hair removal with our expert aesthetic specialists today!
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/chemical-peels">
            <div className="bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={ChemicalPeel}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800 line-clamp-3">
                  Chemical Peels
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  At The Asthetik Clinic, we specialize in chemical peels for
                  smoother, clearer skin. Our professional treatments target
                  acne scars, sun damage, and fine lines, offering a
                  non-invasive solution to rejuvenate your complexion. Say
                  goodbye to dull skin and hello to glowing, youthful radiance
                  with our skin resurfacing services.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/thread-lifts">
            <div className=" md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={ThreadLift}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Thread Lifts
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  At The Asthetik Clinic, we specialize in Thread Lifts,
                  offering non-surgical solutions to lift and tighten skin,
                  reducing sagging and wrinkles. Our expert team provides
                  minimally invasive treatments with instant results for facial
                  rejuvenation. If you're concerned about aging skin or skin
                  laxity, experience affordable, effective alternatives at our
                  clinic.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/fillers-treatment">
            <div className=" md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={FillersTreatment}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Fillers Treatment
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  Looking for effective Fillers Treatment at The Asthetik
                  Clinic? Our expert team offers non-invasive facial fillers to
                  smooth wrinkles, restore volume, and rejuvenate your
                  appearance. Say goodbye to sagging skin, fine lines, and
                  volume loss. Experience natural-looking results with minimal
                  discomfort and downtime at our trusted clinic. Dermal fillers,
                  anti-aging treatments, and facial rejuvenation options
                  available.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/iv-vitamin-therapy">
            <div className=" md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={IVVitaminTherapy}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  IV Vitamin Therapy
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  IV vitamin therapy with many other benefits; detoxifies the
                  body, boosts immune system and delivers a natural glow to the
                  skin. It allows high absorption of vitamins and minerals that
                  are injected into the bloodstream directly, for increased fast
                  benefits.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/mesotherapy">
            <div className=" hidden md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={Mesotherapyone}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Mesotherapy
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  At The Asthetik Clinic, we offer expert Mesotherapy treatments
                  to help you achieve smoother, rejuvenated skin. Struggling
                  with stubborn cellulite, wrinkles, or sagging? Our Mesotherapy
                  for skin rejuvenation, anti-aging Mesotherapy, and cellulite
                  treatment can address these concerns effectively, restoring
                  confidence and youthful glow. Reclaim your beauty today!
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/prp-treatment">
            <div className=" md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={PrpTreatment}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800 ">
                  PRP Treatment
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  At The Asthetik Clinic, our PRP (Platelet-Rich Plasma)
                  treatment offers a non-surgical solution for hair restoration,
                  skin rejuvenation, and healing. Say goodbye to thinning hair,
                  wrinkles, and scars. Experience a painless procedure with
                  minimal downtime for natural, long-lasting results. Trust The
                  Asthetik for professional PRP therapy in Karachi.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/hifu-treatment">
            <div className=" md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={HifuTreatment}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  HIFU Treatment
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  Looking for effective HIFU Treatment at The Asthetik Clinic?
                  Our non-invasive HIFU therapy targets wrinkles, sagging skin,
                  and signs of aging, providing youthful, firmer skin. At The
                  Asthetik, we offer expert care using advanced technology for
                  lifting, tightening, and rejuvenation, all without the need
                  for surgery or downtime.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* athestic service */}

      {/* athestic service */}

      <div className="py-12 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-black">
            Advanced
            <span className="text-indigo-600">Aesthetic Treatments </span>
          </h2>
        </div>
      </div>

      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <Link href="/services/skin-laser-treatment">
            <div className="bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={SkinLaserTreatment}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Micro needling and Dermaplaning
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  At The Asthetik Clinic, we offer advanced microneedling and
                  dermaplaning treatments to rejuvenate your skin. These
                  non-invasive procedures help reduce fine lines, acne scars,
                  and dullness, providing smoother, glowing skin. Struggling
                  with uneven texture or clogged pores? Our expert solutions
                  ensure minimal discomfort and quick recovery, bringing out
                  your skin's natural beauty.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/skin-laser-treatment">
            <div className="bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={SkinLaserTreatment}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  HydraFacial
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  At The Asthetik Clinic, we offer HydraFacial treatments
                  designed to rejuvenate and hydrate your skin. This
                  non-invasive facial therapy targets dryness, dullness, and
                  fine lines, leaving you with a fresh, glowing complexion.
                  Experience effective skin care with HydraFacial, ideal for
                  tackling skin concerns like acne, aging, and uneven tone.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/skin-laser-treatment">
            <div className="bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={SkinLaserTreatment}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Skin Tightening and Anti-Aging Treatments
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  Looking for effective skin tightening and anti-aging
                  treatments? The Asthetik Clinic offers advanced solutions to
                  combat wrinkles, sagging skin, and fine lines. Restore
                  youthful elasticity with non-invasive procedures tailored to
                  your needs. Our expert team provides personalized care for
                  smoother, firmer skin, rejuvenating your appearance and
                  confidence.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/services/skin-laser-treatment">
            <div className="bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <Image
                  src={SkinLaserTreatment}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Platelet-Rich Plasma Therapy
                </h3>
                <p className="text-gray-600   mb-4 mt-2 line-clamp-3">
                  Platelet-Rich Plasma (PRP) Therapy at The Asthetik Clinic
                  offers a non-invasive solution for hair restoration, skin
                  rejuvenation, and healing. Experience faster recovery and
                  natural results with our advanced PRP treatments. Say goodbye
                  to thinning hair, wrinkles, and slow healing—our expert team
                  ensures safe, effective, and personalized care.
                </p>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* contact us */}
      <Contact />

      {/* contact us */}
    </div>
  );
}
