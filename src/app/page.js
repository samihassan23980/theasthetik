import Image from "next/image";
import imageLogo from "/public/logo.png";
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
                  <span className="block xl:inline"> Quest of the Best</span>
                  <span className="block  text-blue-700 lg:inline sm:px-2">
                    Aesthetic Services
                  </span>
                  <span className="block xl:inline"> Ends Here</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  We are a doctor-led beauty clinic, Affiliated with various
                  international institution. We make sure that the treatment
                  provided here using state-of-the-art equipmet is up the mark.
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/the-ashthetik%2Ftop%20image.webp?alt=media&token=c119ff7f-292f-4253-9ff8-6469ae50af85"
                  alt="Skincare Model"
                  className="shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}
      {/* about start */}
      <section className="hidden sm:block bg-white mt-7 md:mt-0 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className=" flex items-center ">
              <div className="data w-full">
                <h2 className="font-manrope  font-semibold text-3xl lg:text-3xl text-black mb-9 max-lg:text-center relative">
                  Welcome to The Asthetik
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl  mx-auto">
                  Embark on a personalized journey towards your beauty goals
                  with The Ästhetik, where we recognize the uniqueness of each
                  individual&rsquo;s needs and concerns. Our commitment is to
                  listen, understand, and tailor a treatment plan exclusively
                  for you. From the initial consultation to dedicated aftercare,
                  we provide assistance and guidance throughout the entire
                  process.
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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/the-ashthetik%2F2.webp?alt=media&token=9af7bccf-a5d5-446b-9017-aa6b8cd4199c"
                alt="About Us tailwind page"
                className=" shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* about end */}

      <div className=" mt-10 py-12 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold dark:text-white">
            Aesthetic <span className="text-indigo-600">Excellence</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold  px-3 mb-2">
            Botox Treatment
          </h2>
          <p className="text-gray-500 sm:hidden px-4  dark:text-white">
            ReGlow offers personalized Botox treatments led by Dr. Mohammad
            Hurmatali, focusing on enhancing natural beauty with subtle and
            natural-looking results.
          </p>
          <p className="text-gray-500 hidden sm:block  dark:text-white">
            ReGlow offers personalized Botox treatments led by Dr. Mohammad
            Hurmatali, focusing on enhancing natural beauty with subtle and
            natural-looking results. Botox and FDA-approved treatment and
            softens wrinkles by relaxing facial muscles. Dr. Samina experience
            ensures precision and individualized care and helping patients
            achieve renewed confidence and a youthful appearance.
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8">
          <div className=" md:w-5/12 px-4 sm:px-0">
            <img
              className="rounded-2xl shadow-2xl"
              src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FBotox-Treatment-1.webp?alt=media&token=b0732bc0-4b90-4420-b8f1-477bf7b13ba4"
            />
          </div>
          <div className=" md:w-5/12 px-4 sm:px-0">
            <img
              className="rounded-2xl shadow-2xl"
              src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2Fbotox-injection-botox-vs-fillers.webp?alt=media&token=45444854-fd69-42d9-b598-4e3bb6e2f67b"
            />
          </div>
        </div>
      </div>

      {/* athestic service */}
      <div className="py-12 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold dark:text-white">
            Aesthetic <span className="text-indigo-600">Services</span>
          </h2>
        </div>
      </div>
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <Link href="/services/skin-laser-treatment">
            <div className="bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FSkin-Laser-Treatment.webp?alt=media&token=f5dbccaf-218f-4fb0-9066-6b1d1597822f"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Skin Laser Treatments
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Skin laser treatments are effective to fight signs of aging
                  like wrinkles and fine lines on the facial skin. It is also
                  helpful in treating the loss of skin tone by improving your
                  complexion.
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FMedical-Grade-Facial.webp?alt=media&token=fe300098-e7f7-4dbd-b9d8-96d3140656a1"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Medical Grade Facial
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  A medical grade facial can help you with your active skin
                  concerns and can also protect you from future skin issues. A
                  medical grade facial will enhance your skin health with a long
                  lasting than a spa facial would promise.
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FLaser-Hair-Removal.webp?alt=media&token=575a2154-866b-4c25-95f2-3e761665c019"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Laser Hair Removal
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Laser hair removal is the option if you are tired of shaving,
                  tweezing or waxing for removal of unwanted hair. Laser hair
                  removal is the most common cosmetic procedure which uses
                  advanced laser technology to destroy hair in targeted areas.
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FChemical-Peels.webp?alt=media&token=386c4e78-6f04-40f0-bb85-d6727e7270f7"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Chemical Peels
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Chemical peels work like scrubs but are way more effective. In
                  chemical peels and a chemical solution is used that exfoliates
                  and retextures the skin by removing the outer layers.
                  Subsequently a new layer of fresh young skin is formed to help
                  against signs of aging.
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
            <div className="hidden md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FThread-Lift.webp?alt=media&token=21585bae-f139-4209-a647-7bd5eb8ae222"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Thread Lifts
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  If you are facing issues like jowls and drooping cheeks but
                  you cannot undergo a facelift surgery (or don&rsquo;t want
                  to), thread lifts are the good news for you. Thread lifts
                  provide better face lift than other noninvasive facial
                  rejuvenation methods but is less of a worry than facelift
                  surgeries.
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
            <div className="hidden md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FFillers-Treatment.webp?alt=media&token=cbed129b-2210-4340-b335-09f99d9aa16f"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Fillers Treatment
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Fillers injections, commonly known as dermal fillers, are
                  among non-surgical cosmetic procedures. Dermal fillers plump
                  up wrinkles, smooth lines and restore volume in your face.
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
            <div className="hidden md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FIV-Vitamin-Therapy.webp?alt=media&token=4eaf013e-e60f-4de3-90c9-370438441dd3"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  IV Vitamin Therapy
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FMesotherapy.webp?alt=media&token=ede7ded3-7572-4b55-98e2-d31ee74bf197"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Mesotherapy
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Mesotherapy is a promising way to remove unwanted fat and
                  shape up the body. It provides results similar to a
                  liposuction without the pain, expense and recovery time
                  associated to liposuction.
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
            <div className="hidden md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FPRP-Therapy.webp?alt=media&token=7610276c-e8b2-4514-b314-55f86f0ced0d"
                  alt="Product 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  PRP Treatment
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Platelet-Rich Plasma (PRP) is a type of regenerative medicine
                  that promotes body healing and is used for a range of medical
                  conditions, from hair loss to joint pain. PRP treatment (or
                  PRP therapy) is among the most effective types of hair
                  restoration treatments.
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
            <div className="hidden md:block sm:block lg:block bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/services%2FHIFU-Treatment.webp?alt=media&token=fdfcd1a5-32e7-4228-a6f7-76a6c519e958"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  HIFU Treatment
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  High Intensity Focused Ultrasound (HIFU) is a relatively new
                  and advanced cosmetic treatment best for skin tightening.
                  People are going for HIFU considering it a noninvasive and
                  painless replacement for face lifts.
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

      {/* contact us */}
      <Contact />

      {/* contact us */}
    </div>
  );
}
