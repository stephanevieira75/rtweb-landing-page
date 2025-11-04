import type { MetadataRoute } from "next";

function formatDateForXML(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      priority: 1,
      lastModified: formatDateForXML(new Date()),
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/mentions-legales`,
      priority: 0.5,
      lastModified: formatDateForXML(new Date()),
      changeFrequency: "yearly",
    },
  ];
}
