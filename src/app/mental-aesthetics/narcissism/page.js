export default function Narcissism() {
  return (
    <div className="bg-white">
      <div className="font-sans pt-44 ">
        <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
          <div>
            <h2 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">
              Restoring Balance to the Self,
              <span className="text-blue-600"> Beyond Narcissism</span>
            </h2>
            <p className="text-gray-600 mt-6  leading-relaxed">
              As a mental aesthetics doctor specializing in narcissism, I help
              individuals break free from the patterns of self-centeredness,
              fostering genuine self-awareness and emotional growth. Through
              tailored therapeutic approaches, I guide clients toward healthier
              relationships with themselves and others, promoting inner harmony
              and authentic self-expression.
            </p>

            <div className="mt-12 flex gap-x-6 gap-y-4 justify-center max-sm:flex-col">
              <button
                type="button"
                className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border border-blue-600 transition-all text-white font-bold text-sm rounded px-6 py-3"
              >
                Get Appointment Today
              </button>
              <button
                type="button"
                className="bg-transparent text-gray-800 hover:bg-gray-800 hover:text-white border border-gray-800 transition-all font-bold text-sm rounded px-6 py-3"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
