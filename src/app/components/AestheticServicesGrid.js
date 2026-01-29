import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AestheticServicesGrid({
  services = [],
}) {
  return (
    <section aria-labelledby="services-title" className="bg-white">
      {/* Heading */}
      <div className="py-12">
        <div className="max-w-screen-md mx-auto text-center px-4">
          <h2 id="services-title" className="mb-4 text-3xl font-bold text-black">
            Skin and Beauty Treatment{" "}
            <span className="text-indigo-600">Services in Karachi</span>
          </h2>
          <p className="text-gray-600">
            Explore our advanced aesthetic and dermatology services with expert care and modern technology.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="font-[sans-serif] pb-12 mx-auto lg:max-w-6xl max-w-lg md:max-w-full px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <article
              key={service.href}
              className="bg-white sm:bg-gray-200 rounded-xl overflow-hidden transition-transform hover:scale-[1.03] will-change-transform"
            >
              <Link
                href={service.href}
                className="block focus:outline-none focus:ring-2 focus:ring-blue-600/60 rounded-xl"
                aria-label={`Open ${service.title} details`}
              >
                <div className="relative w-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={800}
                    height={520}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    placeholder="blur"
                    quality={80}
                    // Only set priority if this section is above-the-fold AND this is the first visible card
                    priority={service.priority === true}
                    fetchPriority={service.priority === true ? "high" : "auto"}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="bg-gray-100 p-6">
                  <h3 className="text-2xl font-bold mt-2 text-gray-800">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 mt-2 line-clamp-3">
                    {service.description}
                  </p>

                  {/* CTA: not a button (avoid nested interactive) */}
                  <span className="w-full inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl">
                    View Service Details
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
