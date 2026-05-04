import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Anant Singh | Video Editor & Web Developer — 5M+ Organic Views",
  description:
    "Anant Singh is a freelance video editor and web developer based in India. Specializing in high-retention Reels editing with 5M+ organic views generated. Trusted by 500K+ creators. Available for US & Australian clients.",

  keywords: [
    "video editor for hire",
    "freelance video editor India",
    "reels video editor",
    "short form video editor",
    "instagram reels editor",
    "video editor for coaches",
    "video editor for online course creators",
    "video editor for business coaches",
    "high retention reels editing",
    "web developer India",
    "Next.js developer",
    "video editor and web developer",
    "affordable video editing",
    "video editor for US clients",
    "video editor for Australian clients",
    "Anant Singh video editor",
  ],

  authors: [{ name: "Anant Singh", url: "https://yourwebsite.com" }],
  creator: "Anant Singh",

  openGraph: {
    title: "Anant Singh | Video Editor — 5M+ Organic Views",
    description:
      "Freelance video editor specializing in Instagram Reels for coaches and creators. 5M+ organic views. Fast turnaround. Available for US & Australian clients.",
    url: "https://yourwebsite.com",
    siteName: "Anant Singh Portfolio",
    images: [
      {
        url: "/assets/profile2.png",
        width: 1200,
        height: 630,
        alt: "Anant Singh — Video Editor Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anant Singh | Video Editor | Web developer",
    description:
      "Freelance video editor for Instagram Reels. 5M+ organic views generated. Available for Indian, US & Australian coaches and creators.",
    images: ["/assets/Anant_Model.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/assets/Anant_Model.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}