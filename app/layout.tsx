import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sara Hassane",
  description: "Portfolio of Sara Hassane",
  icons: {
    icon: "favicon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}>


        {/* FLOATING NAVBAR */}
        <FloatingNav
          navItems={[
            { name: "Home", link: "#home", },
            { name: "Skills", link: "#skills" },
            { name: "Projects", link: "#projects" },

          ]} />


        {/* BACKGROUND ANIMATION */}
        <div className="h-screen inset-0 z-0 fixed">
          <BackgroundGradientAnimation
            secondColor="118, 47, 132"
            thirdColor="124, 38, 203"
            fourthColor="57, 52, 127"
            fifthColor="118, 47, 132"
            pointerColor="133, 97, 150"
          />
        </div>

        {/* SIDEBAR */}
        <SideBar />

        {children}

        <Footer /> 
      </body>
    </html>

  );
}
