import React from "react";
import AnimatedText from "../components/AnimatedText";
import "../styles/globals.css";
function Hero() {
  return (
    <section id="hero">
      <div className="md:grid gap-4 grid-cols-12 max-w-7xl mx-auto lg:px-5 ">
        <div className="relative lg:py-20 col-span-12  lg:col-span-10">
          <div className="rounded-lg my-10 p-1 lg:p-0 bg-secondary-shaded md:absolute md:-left-96 md:transform">
            <div className="grid grid-cols-12  ">
              <div
                className="col-span-12 md:col-span-12    pt-2 md:pt-36 pb-2 md:pb-20   rounded-lg  
                  flex justify-end"
              >
                <AnimatedText />
              </div>
              <div className="col-span-4 w-96"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
