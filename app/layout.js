import { Syne } from "next/font/google";
import "./globals.css";

// custom font
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Anant | Video Editor",
  description: "Video Editor Portfolio",
  icons: {
    icon: "/assets/profile2.png", // ✅ Favicon path
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
