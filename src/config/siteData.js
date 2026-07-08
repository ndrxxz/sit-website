const SITE_URL = "https://yourdomain.com"; // TODO: replace once there's a domain
const COMPANY_NAME = "The Spark Info-Tech Enterprise";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: "TODO: https://yourdomain.com/logo.png",
  description: "TODO: short company description",
  email: "info@yourdomain.com",
  telephone: "+63-...",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4F, Simkimban Bldg., 700 Taguig St., Rizal Village",
    addressLocality: "Makati",
    addressRegion: "Metro Manila",
    postalCode: "1208",
    addressCountry: "PH",
  },
};

function createServiceSchema({ serviceType, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceType,
    description: description,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    areaServed: "PH",
  };
}

const serviceData = [
  {
    serviceType: "Hardware Services",
    description: "TODO: hardware services description",
  },
  {
    serviceType: "Software Services",
    description: "TODO: software services description",
  },
  {
    serviceType: "Security Services",
    description: "TODO: security services description",
  },
  {
    serviceType: "Applications Services",
    description: "TODO: applications services description",
  },
];

export const serviceSchema = serviceData.map(createServiceSchema);

export const aboutUsSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Us",
  description: "TODO: short company description",
};
