import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    description: site.description,
    url: site.domain,
    image: `${site.domain}/images/stock/hero-skin.jpg`,
    telephone: site.phones.map((p) => p.label),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lemigo Hotel, Gishushu",
      addressLocality: "Kigali",
      addressCountry: "RW",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [site.instagram, site.facebook, site.whatsappChannel],
    priceRange: "RWF",
    medicalSpecialty: "Dermatology",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
