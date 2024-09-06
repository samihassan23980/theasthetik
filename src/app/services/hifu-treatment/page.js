export default function HifuTreatments() {
  return (
    <div className="bg-white">
      <div className="font-sans pt-44  ">
        <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
          <div>
            <h2 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">
              Non-Invasive Skin Tightening with
              <span className="text-blue-600"> HIFU Precision</span>
            </h2>
            <p className="text-gray-600 mt-6  leading-relaxed">
              Achieve youthful, firmer skin with our cutting-edge HIFU
              (High-Intensity Focused Ultrasound) treatment. This non-invasive
              procedure stimulates collagen production, lifting and tightening
              your skin for natural, long-lasting results. Perfect for those
              seeking to enhance their appearance without surgery or downtime.
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
