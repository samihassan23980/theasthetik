import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid({ services = [] }) {
  return (
    <section
      aria-labelledby="services-heading"
      className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full"
    >
      <h2 id="services-heading" className="sr-only">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <article
            key={service.href}
            className="bg-white sm:bg-gray-200 rounded-xl overflow-hidden transition-transform hover:scale-[1.03] will-change-transform"
          >
            {/* Make entire card clickable with a single Link */}
            <Link
              href={service.href}
              className="block focus:outline-none focus:ring-2 focus:ring-blue-600/60 rounded-xl"
              aria-label={`View details for ${service.title}`}
            >
              <div className="relative w-full">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={800}
                  height={500}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  placeholder="blur"
                  quality={80}
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

                {/* Not a button anymore (avoid nested interactive). It's just CTA text */}
                <span className="w-full inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl">
                  View Service Details
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
