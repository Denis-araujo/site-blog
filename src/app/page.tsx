import type { Metadata } from "next";
import { LandPage } from "@/templates/land-page";

export const metadata: Metadata = {
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "",
    url: "https://site-blog-opal-gamma.vercel.app/og-image.png",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [{
      url: "https://site-blog-opal-gamma.vercel.app/og-image.png",
      width: 800,
      height: 600,
      alt: "Site.Set"
    }]
  }
}

export default function HomePage() {
  return (
    <LandPage />
  )
}