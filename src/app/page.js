import Image from "next/image";
import imageLogo from "/public/logo.png";

export default function Home() {
  return (
    <div className="bg-white">
      <section className="px-2 py-32 relative top-16 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline"> Quest of the Best</span>
                  <span className="block text-blue-700 xl:inline px-2">
                    Aesthettic Services
                  </span>
                  <span className="block xl:inline"> Ends Here</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  We are a doctor-led beauty clinic, Affiliated with various
                  international institution. We make sure that the treatment
                  provided here using state-of-the-art equipmet is up the mark.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read More
                  </button>
                  <button
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-4 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    APPOINTMENT
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-2xl sm:rounded-xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <img
                  src="https://georgedelaneymd.com/wp-content/uploads/2018/10/shutterstock_517359928-e1540313862400.jpg"
                  alt="Skincare Model"
                  className="shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className=" flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl mb-2 text-black  max-lg:text-center relative">
                  About US
                </h2>
                <h2 className="font-manrope  font-semibold text-3xl lg:text-3xl text-black mb-9 max-lg:text-center relative">
                  Welcome to The Asthetik
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Embark on a personalized journey towards your beauty goals
                  with The Ästhetik, where we recognize the uniqueness of each
                  individual&rsquo;s needs and concerns. Our commitment is to listen,
                  understand, and tailor a treatment plan exclusively for you.
                  From the initial consultation to dedicated aftercare, we
                  provide assistance and guidance throughout the entire process.
                </p>
                <div className="relative   mt-4">
                  <button
                    type="button"
                    className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="img-box px-20 py-4">
              <img
                src="https://images.pexels.com/photos/5069587/pexels-photo-5069587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Us tailwind page"
                className=" shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className=" mt-10 py-12 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold dark:text-white">
            Aesthetic <span className="text-indigo-600">Excellence</span>
          </h1>
          <h1 className="text-4xl font-bold px-3 mb-2">Botox Treatment</h1>
          <p className="text-gray-500 dark:text-white">
            ReGlow offers personalized Botox treatments led by Dr. Mohammad
            Hurmatali, focusing on enhancing natural beauty with subtle and
            natural-looking results. Botox and FDA-approved treatment and softens
            wrinkles by relaxing facial muscles. Dr. Hurmatali experience
            ensures precision and individualized care and  helping patients achieve
            renewed confidence and a youthful appearance.
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8">
          <div className=" md:w-5/12">
            <img
              className="rounded-2xl shadow-2xl"
              src="https://www.macare.in/wp-content/uploads/2022/05/botox-2020-01-13-5e1c430703002.jpg"
            />
          </div>
          <div className=" md:w-5/12">
            <img
              className="rounded-2xl shadow-2xl"
              src="https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320510/botox-injection-botox-vs-fillers.jpg"
            />
          </div>
        </div>
      </div>

      <div className=" mt-10 py-12 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold dark:text-white">
            Aesthetic <span className="text-indigo-600">Services</span>
          </h1>
        </div>
      </div>

      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/Skin-Laser-Treatment.jpg"
                alt="Product 1"
                className="h-full w-full object-contain"
              />
            </div>
            <div className=" bg-gray-100 p-6">
              <h3 className="text-2xl font-bold mt-2 text-gray-800">
                Laser Treatments
              </h3>
              <p className="text-gray-600   mb-4 mt-2">
                Skin laser treatments are effective to fight signs of aging like
                wrinkles and fine lines on the facial skin. It is also helpful
                in treating the loss of skin tone by improving your complexion.
              </p>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
              >
                More Details
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/Medical-Grade-Facial.jpg"
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

          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/Laser-Hair-Removal.jpg"
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

          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/Chemical-Peels.jpg"
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
                chemical peels and a chemical solution is used that exfoliates and
                retextures the skin by removing the outer layers. Subsequently a
                new layer of fresh young skin is formed to help against signs of
                aging.
              </p>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
              >
                More Details
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/Thread-Lift.jpg"
                alt="Product 1"
                className="h-full w-full object-contain"
              />
            </div>
            <div className=" bg-gray-100 p-6">
              <h3 className="text-2xl font-bold mt-2 text-gray-800">
                Thread Lifts
              </h3>
              <p className="text-gray-600   mb-4 mt-2">
                If you are facing issues like jowls and drooping cheeks but you
                cannot undergo a facelift surgery (or don&rsquo;t want to), thread
                lifts are the good news for you. Thread lifts provide better
                face lift than other noninvasive facial rejuvenation methods but
                is less of a worry than facelift surgeries.
              </p>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
              >
                More Details
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/Fillers-Treatment.jpg"
                alt="Product 1"
                className="h-full w-full object-contain"
              />
            </div>
            <div className=" bg-gray-100 p-6">
              <h3 className="text-2xl font-bold mt-2 text-gray-800">
                Fillers Treatment
              </h3>
              <p className="text-gray-600   mb-4 mt-2">
                Fillers injections, commonly known as dermal fillers, are among
                non-surgical cosmetic procedures. Dermal fillers plump up
                wrinkles, smooth lines and restore volume in your face.
              </p>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
              >
                More Details
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/IV-Vitamin-Therapy.jpg"
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

          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/Mesotherapy.jpg"
                alt="Product 1"
                className="h-full w-full object-contain"
              />
            </div>
            <div className=" bg-gray-100 p-6">
              <h3 className="text-2xl font-bold mt-2 text-gray-800">
                Mesotherapy
              </h3>
              <p className="text-gray-600   mb-4 mt-2">
                Mesotherapy is a promising way to remove unwanted fat and shape
                up the body. It provides results similar to a liposuction
                without the pain, expense and recovery time associated to
                liposuction.
              </p>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
              >
                More Details
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/PRP-Therapy.jpg"
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
                conditions, from hair loss to joint pain. PRP treatment (or PRP
                therapy) is among the most effective types of hair restoration
                treatments.
              </p>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
              >
                More Details
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div className="">
              <img
                src="https://theasthetik.com/wp-content/uploads/2023/02/HIFU-Treatment.jpg"
                alt="Product 1"
                className="h-full w-full object-contain"
              />
            </div>
            <div className=" bg-gray-100 p-6">
              <h3 className="text-2xl font-bold mt-2 text-gray-800">
                HIFU Treatment
              </h3>
              <p className="text-gray-600   mb-4 mt-2">
                High Intensity Focused Ultrasound (HIFU) is a relatively new and
                advanced cosmetic treatment best for skin tightening. People are
                going for HIFU considering it a noninvasive and painless
                replacement for face lifts.
              </p>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
              >
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="font-[sans-serif] max-w-6xl mx-auto p-4 mt-4">
        <div className="bg-white  p-8">
          <h2 className="text-3xl text-gray-800 font-extrabold text-center mb-12">
            Contact us
          </h2>
          <form className="space-y-3 max-w-xl mx-auto text-gray-800">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded py-3 px-4 text-sm focus:outline-blue-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded py-3 px-4 text-sm focus:outline-blue-600"
            />
            <input
              type="email"
              placeholder="Phone No."
              className="w-full border rounded py-3 px-4 text-sm focus:outline-blue-600"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full border rounded px-4 text-sm pt-3 focus:outline-blue-600"
              defaultValue={""}
            />
            <button
              type="button"
              className="text-white w-full bg-blue-600 hover:bg-blue-700 rounded text-sm px-6 py-3 !mt-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                className="mr-2 inline"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
            <div className="flex flex-col items-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 fill-blue-600"
                viewBox="0 0 512 512"
              >
                <path
                  d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z"
                  data-original="#000000"
                />
                <path
                  d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z"
                  data-original="#000000"
                />
              </svg>
              <div className="mt-4 text-center">
                <h4 className="text-gray-800 text-base font-bold">
                  Visit office
                </h4>
                <p className="text-sm text-gray-500 mt-2">
                  {" "}
                  First Floor, Plot No. 54C, Lane 4 Shahbaz Commercial Area DHA
                  Phase 6 Karachi
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 fill-blue-600"
                viewBox="0 0 473.806 473.806"
              >
                <path
                  d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
                  data-original="#000000"
                />
              </svg>
              <div className="mt-4 text-center">
                <h4 className="text-gray-800 text-base font-bold">Call us</h4>
                <p className="text-sm text-gray-500 mt-2"> 0345-8222263</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 fill-blue-600"
                viewBox="0 0 32 32"
              >
                <path
                  d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z"
                  data-original="#000000"
                />
                <path
                  d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z"
                  data-original="#000000"
                />
              </svg>
              <div className="mt-4 text-center">
                <h4 className="text-gray-800 text-base font-bold">
                  Chat to us
                </h4>
                <p className="text-sm text-gray-500 mt-2">
                  info@theasthetik.com
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 fill-blue-600"
                viewBox="0 0 100 100"
              >
                <path
                  d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
                  data-original="#000000"
                />
              </svg>
              <div className="mt-4 text-center">
                <h4 className="text-gray-800 text-base font-bold">Fax</h4>
                <p className="text-sm text-gray-500 mt-2">02135240710</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}
