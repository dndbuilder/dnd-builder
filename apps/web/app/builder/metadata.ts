import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Builder Editor - Create Your Page",
  description: "Use our intuitive drag-and-drop editor to build beautiful, responsive web pages without coding knowledge.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Page Builder Editor - Create Your Page",
    description: "Use our intuitive drag-and-drop editor to build beautiful, responsive web pages without coding knowledge.",
    images: [
      {
        url: "/images/builder-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Page Builder Editor Interface",
      },
    ],
  },
};