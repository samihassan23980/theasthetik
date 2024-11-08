import Link from "next/link";

export default function Servics() {
  return (
    <div className="bg-white">
      <div className="font-sans pt-44 py-6 ">
        <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
          <div>
            <h1 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">
              Bringing Beauty and
              <span className="text-blue-600"> Wellness Together</span>
            </h1>
            <p className="text-gray-600 mt-6  leading-relaxed">
              We believe true beauty comes from within. Our clinic offers a
              variety of treatments to help you look and feel your best. From
              laser treatments and medical-grade facials to PRP and HIFU, we
              provide services that refresh your appearance while supporting
              your well-being. Whether you're interested in chemical peels,
              thread lifts, or IV vitamin therapy, our expert team is here to
              help you achieve your beauty goals with care and precision.
            </p>

            <div className="mt-12 flex gap-x-6 gap-y-4 justify-center  ">
              <Link href="/contact">
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border border-blue-600 transition-all text-white font-bold text-sm rounded px-6 py-3"
                >
                  Get Appointment Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h2 className="text-white sm:text-4xl text-3xl font-bold mb-4">
            Discover Our New Services
          </h2>
          <p className="text-white text-base text-center mb-8">
            We believe true beauty comes from within. Our clinic offers a
            variety of treatments to help you look and feel your best.
          </p>
        </div>
      </div>
      {/* services list */}
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
            <div className=" bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
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
            <div className=" bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
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
            <div className=" bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
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
            <div className="  bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
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
            <div className=" bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
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
            <div className=" bg-white sm:bg-gray-200 px-5 sm:px-0 md:px-0 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
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
    </div>
  );
}
