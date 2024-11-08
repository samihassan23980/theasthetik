import Link from "next/link";

export default function Communication() {
  return (
    <div className="bg-white">
      <div className="font-sans pt-44 ">
        <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
          <div>
            <h1 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">
              Empowering Minds through
              <span className="text-blue-600 px-2"> Authentic Communication</span>
            </h1>
            <p className="text-gray-600 mt-6  leading-relaxed">
              As a communication mental aesthetics doctor, I help individuals
              discover the power of authentic dialogue. By refining
              communication skills, I support mental wellness, emotional
              clarity, and deeper connections. Let me guide you in enhancing
              your inner voice and improving your relationships.
            </p>

            <div className="mt-12 flex gap-x-6 gap-y-4 justify-center ">
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

      <div className="font-[sans-serif]">
        <div className="container mx-auto p-8">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-black text-2xl font-bold mb-4">
              Strengthen Your Connections: Communication Therapy at The Asthetik
              Clinic in Karachi
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Effective communication is the foundation of healthy
              relationships, whether personal or professional. At The Asthetik
              Clinic in Karachi, we offer specialized therapy to help you
              enhance your communication skills, express your thoughts with
              clarity, and build deeper, more meaningful connections.
            </p>
          </div>
        </div>
      </div>

      <div className="font-[sans-serif]">
        <div className="container mx-auto p-8">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-black text-2xl font-bold mb-4">
              What is Communication Therapy?
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Communication therapy focuses on improving the way you express
              your thoughts, emotions, and needs. It’s about learning to
              communicate openly, listening actively, and managing conflicts
              without escalation.
            </p>
          </div>
        </div>
      </div>

      <div className="font-[sans-serif]">
        <div className="container mx-auto p-8">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-black text-2xl font-bold mb-4">
              How We Can Help
            </h2>
            <ul className="list-disc mt-4 space-y-2 pl-4">
              <li className="text-sm">
                <strong>Active Listening:</strong> Learn to truly hear what
                others are saying, creating space for open and honest dialogue.
              </li>
              <li className="text-sm">
                <strong>Assertive Expression:</strong> Discover how to express
                your feelings and thoughts confidently without aggression or
                passivity.
              </li>
              <li className="text-sm">
                <strong>Conflict Resolution:</strong> Develop strategies to
                handle disagreements or misunderstandings with calmness and
                empathy, avoiding unnecessary conflict.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="font-[sans-serif]">
        <div className="container mx-auto p-8">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-black text-2xl font-bold mb-4">
              Benefits That Last
            </h2>
            <ul className="list-disc mt-4 space-y-2 pl-4">
              <li className="text-sm">
                <strong>Improved Relationships:</strong> Better communication
                leads to stronger connections, fostering trust and
                understanding.
              </li>
              <li className="text-sm">
                <strong>Emotional Clarity:</strong> Learn to express your
                emotions clearly, reducing confusion or frustration in your
                interactions.
              </li>
              <li className="text-sm">
                <strong>Conflict Prevention:</strong> Resolve conflicts before
                they escalate, creating more harmonious interactions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="font-[sans-serif]">
        <div className="container mx-auto p-8">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-black text-2xl font-bold mb-4">
              Why Choose The Asthetik Clinic?
            </h2>
            <ul className="list-disc mt-4 space-y-2 pl-4">
              <li className="text-sm">
                <strong>Expert Communication Therapists:</strong> Our therapists
                specialize in helping individuals develop practical, real-world
                communication skills.
              </li>
              <li className="text-sm">
                <strong>Personalized Treatment Plans:</strong> Tailored
                approaches to meet your specific communication challenges and
                goals.
              </li>
              <li className="text-sm">
                <strong>Safe, Supportive Environment:</strong> A welcoming and
                non-judgmental space to explore and enhance your communication
                abilities.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="font-[sans-serif]">
        <div className="container mx-auto p-8">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-black text-2xl font-bold mb-4">
              Ready to Strengthen Your Communication Skills?
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Book your consultation today and start building stronger
              connections through effective communication at The Asthetik Clinic
              in Karachi.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex gap-x-6 gap-y-4 justify-center ">
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
  );
}
