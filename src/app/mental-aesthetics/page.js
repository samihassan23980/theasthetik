import Link from "next/link";

export const metadata = {
  title: "Mental Aesthetics Services at The Asthetik Clinic | Karachi",
  description:
    "Explore mental aesthetics services at The Asthetik Clinic in Karachi. Personalized treatments that enhance mental well-being and aesthetic beauty, empowering you inside and out.",
  keywords: [
    "mental aesthetics",
    "mental aesthetics services Karachi",
    "mental wellness treatments",
    "mental aesthetics doctor Karachi",
    "mind and body treatments",
    "aesthetic refinement therapy",
    "holistic beauty and wellness",
    "personalized mental aesthetics",
    "mental health and beauty services",
    "mental aesthetics clinic Karachi",
  ],
  authors: [{ name: "The Asthetik Clinic" }],
};

export default function MentalAesthetics() {
  return (
    <div className="bg-white ">
      <div className="font-sans pt-44 ">
        <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
          <div>
            <h1 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">
              Elevating Minds,
              <span className="text-blue-600"> Enhancing Aesthetics</span>
            </h1>
            <p className="text-gray-600 mt-6  leading-relaxed">
              As a mental-aesthetics doctor, I specialize in harmonizing mental
              well-being with aesthetic refinement, offering personalized
              treatments that uplift both mind and appearance. My goal is to
              empower you to feel balanced, confident, and beautiful from the
              inside out.
            </p>

            <div className="mt-12 flex gap-x-6 gap-y-4 justify-center max-sm:flex-col">
              <Link href="/contact">
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border border-blue-600 transition-all text-white font-bold text-sm rounded px-6 py-3"
                >
                  APPOINTMENT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 py-12 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold dark:text-white">
            Aesthetic <span className="text-indigo-600">Services</span>
          </h2>
        </div>
      </div>

      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <Link href="/mental-aesthetics/codependency">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2Fcodependency.webp?alt=media&token=9a91491a-b294-48f2-8421-82f80f0bbd51"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Codependency
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  A treatment focused on helping individuals regain autonomy,
                  address unhealthy relationship dynamics, and build healthier
                  connections with others.
                </p>{" "}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/mental-aesthetics/narcissism">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2FNARCASSIM.webp?alt=media&token=d0b518ef-7a95-49d9-b295-025d2a5616be"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Narcissism
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  A therapeutic approach to manage narcissistic tendencies,
                  fostering self-awareness, empathy, and healthier interpersonal
                  relationships.
                </p>{" "}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/mental-aesthetics/depression">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2Fdepression.webp?alt=media&token=dd8f1c5a-1e6a-4056-afa7-ad5aa7dbe6b4"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Depression
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Specialized treatment aimed at managing symptoms of
                  depression, improving mood, and enhancing overall well-being.
                </p>{" "}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/mental-aesthetics/childhood-abuse">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2Fchild%20abuse.webp?alt=media&token=15fc84dc-20f9-4d1a-ad54-053eaadb43f8"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Childhood Abuse
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  A compassionate therapy to address the long-term emotional
                  impacts of childhood abuse, helping individuals heal and
                  reclaim their sense of self.
                </p>{" "}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/mental-aesthetics/dissociation">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2Fdissociation.webp?alt=media&token=ec702784-e04e-4feb-834b-02f53a1bb6a9"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Dissociation
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Treatment to help individuals ground themselves, improve
                  awareness, and reconnect with their thoughts, emotions, and
                  surroundings.
                </p>{" "}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/mental-aesthetics/communication">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2Fcommunication.webp?alt=media&token=3ad2d0f7-ba7f-409d-8d45-571cba53329c"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Communication
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Therapeutic sessions designed to improve communication skills,
                  ensuring clarity, understanding, and effective interpersonal
                  interactions.
                </p>{" "}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/mental-aesthetics/difficult-conversation">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2Fdifficult%20conversations.webp?alt=media&token=ece774f2-726d-4de3-b777-e38fc8f25903"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Difficult Conversations
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Guidance on how to navigate challenging conversations with
                  confidence and empathy, fostering healthier relationships.
                </p>{" "}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/mental-aesthetics/emotional-Intelligence">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2Femotions%20inteligence.webp?alt=media&token=c437722a-ed92-494b-b521-b4828f0f7fc9"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Emotional Intelligence
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Therapy focused on enhancing emotional awareness,
                  self-regulation, and empathy, leading to better emotional and
                  social functioning.
                </p>{" "}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/mental-aesthetics/addiction-treatment">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2Faddiction%20treatmrnt.webp?alt=media&token=daa8f285-87ac-4c6e-9057-f43c6edb5ce6"
                  alt="Product 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  Addiction Treatment
                </h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Comprehensive support and therapy for overcoming addiction,
                  building coping strategies, and leading a substance-free life.
                </p>{" "}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl"
                >
                  More Details
                </button>
              </div>
            </div>
          </Link>
          <Link href="/mental-aesthetics/Post-traumatic-stress-disorder">
            <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
              <div className="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/mental-asthetik%2Fptsd.webp?alt=media&token=12833bc7-a494-45cd-a6a0-519aa89b5de6"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className=" bg-gray-100 p-6">
                <h3 className="text-2xl font-bold mt-2 text-gray-800">PTSD</h3>
                <p className="text-gray-600   mb-4 mt-2">
                  Post-Traumatic Stress Disorder (PTSD) is a mental health
                  condition that can develop after experiencing or witnessing a
                  traumatic event, such as violence, natural disasters, or
                  serious accidents.
                </p>{" "}
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
