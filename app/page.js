"use client";

import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { Footer } from "./Component/Footer";
import { Hero } from "./Component/Hero";
import { Navbar } from "./Component/Navbar";
import { Portfolio } from "./Component/Portfolio";
import { Resume } from "./Component/Resume";



export default function Home() {
  return (
   <div className="max-w-6xl mx-auto w-[90%]">
    {/*  */}
    <div className="fixed top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-orange-200 via-pink-200 to-rose-300 rounded-b-full blur-2xl opacity-40 animate-pulse "></div>
    <div className="fixed top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-pink-300 via-rose-200 to-orange-200 rounded-b-full blur-3xl opacity-30 animate-pulse " style={{animationDelay: "1s"}}></div>

    {/* components */}
    <Navbar/>
    <Hero/>
    <Portfolio/>
    <About/>
    <Resume/>
    {/* <Contact/> */}
    <Footer/>
   </div>
  );
}
