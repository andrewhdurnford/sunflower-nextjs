"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PortfolioTable from "@/components/PortfolioTable";
import Testimonials from "@/components/Testimonials";
import ReactPageScroller from "react-page-scroller";
import Footer from "@/components/Footer";
import DotNavigator from "@/components/DotNavigator";
import {isMobile} from 'react-device-detect';
import Ethos from "@/components/Ethos";

const slugToPageMap: Record<string, number> = {
  '/mission': 1,
  '/ethos': 2,
  '/portfolio': 3,
  '/founders': 4,
  '/contact': 5,
};

const App: React.FC = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [loaded, setLoaded] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [scrollUpEnabled, setScrollUpEnabled] = useState(true);
  const [scrollDownEnabled, setScrollDownEnabled] = useState(true);
  const [breatheEnabled, setBreatheEnabled] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [mobile, setMobile] = useState(true);
  const [lg, setLg] = useState(false);
  const beforePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (currentPage === 3) {
      setScrollUpEnabled(false)
      setScrollDownEnabled(false)
    }
  }, [currentPage]);

  useEffect(() => {
    console.log('yabadabadoo')
    const handleResize = () => {
      setLg(window.innerWidth >= 1024);
    };
    setMobile(isMobile);
    setLg(window.innerWidth >= 1024);
    if (isMobile) {
      setLoaded(true);
    } else {
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Routing
  const slug = usePathname();

  useEffect(() => {
    if (slug && slug.length > 0) {
      const pageIndex = slugToPageMap[slug] ?? 0;
      setCurrentPage(pageIndex);
    } else {
      setCurrentPage(0);
    }
  }, [slug]);


  // Flower Animation
  const expandFlower = () => {
    if (!breatheEnabled) return;
    setBreatheEnabled(false);
    const message = document.getElementById("full-screen-message");
    const centerflower = document.getElementById("center-flower");
    if (!(currentPage === 0) || !message || !centerflower) return;

    setTimeout(() => {
      centerflower.style.transition = "transform 2s ease-in-out";
      if (window.innerHeight > window.innerWidth) {
        centerflower.style.transform = "scale(160)";
      } else {
        centerflower.style.transform = "scale(80)";
      }
    }, 10);

    setTimeout(() => {
      message.classList.add("opacity-100");
    }, 1000);

    setTimeout(() => {
      if (centerflower) centerflower.style.transform = "scale(1)";
      message.classList.remove("opacity-100");
    }, 2000);

    setTimeout(() => {
      setBreatheEnabled(true);
    }, 4000);
  };

  return (
    <>
      {!mobile &&
        <DotNavigator currentScreen={currentPage} onDotClick={beforePageChange} isMobile={isMobile} />}
      <ReactPageScroller
        customPageNumber={currentPage}
        blockScrollUp={!scrollEnabled && !scrollUpEnabled} 
        blockScrollDown={!scrollEnabled && !scrollDownEnabled}
        onBeforePageScroll={beforePageChange}
        renderAllPagesOnFirstRender={true}
      >
        <div
          id="hero"
          className={`hero w-full landscape:h-screen portrait:h-[calc(100dvh)] relative overflow-hidden bg-dark-green 
                  flex portrait:flex-col justify-center portrait:items-center portrait:gap-20`}
        >
          <h1
            className={`title font-arya font-bold text-offwhite transition-[top] duration-1000 w-11/12 portrait:text-center 
            ${loaded ? "top-0" : "-top-full"}`}
          >
            SUNFLOWER <br /> CAPITAL
          </h1>

          <div className="flowerbox">
            <h2
              id="full-screen-message"
              className="z-10 fixed inset-0 flex items-center justify-center font-arya text-dark-green font-bold text-[6vw] opacity-0 transition-opacity duration-1000"
            >
              From Seed to Sunflower
            </h2>

            <div
              className={`flower flower-2 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/flower-2.svg"
                alt="Flower 2"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-3 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/flower-3.svg"
                alt="Flower 3"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-5 ${
                loaded ? "" : "opacity-0"
              } hover:animate-spin`}
            >
              <Image
                src="/images/flower-5.svg"
                alt="Flower 5"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-11 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/flower-11.svg"
                alt="Flower 11"
                fill
                quality={100}
              />
            </div>

            <div
              id="center-flower"
              onClick={expandFlower}
              className={`z-10 flower-4 transition-all duration-1000 centerflower
                    ${loaded ? "" : "opacity-0"} ${
                breatheEnabled ? "breathe" : ""
              }`}
            >
              <Image
                src="/images/flower-4.svg"
                alt="Center Flower"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-7 ${
                loaded ? "" : "opacity-0"
              } hover:animate-spin`}
            >
              <Image
                src="/images/flower-7.svg"
                alt="Flower 7"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-9 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/flower-9.svg"
                alt="Flower 9"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-10 ${
                loaded ? "" : "opacity-0"
              } hover:animate-spin`}
            >
              <Image
                src="/images/flower-10.svg"
                alt="Flower 10"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-12 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/flower-12.svg"
                alt="Flower 12"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-14 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/flower-14.svg"
                alt="Flower 14"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-16 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/flower-16.svg"
                alt="Flower 16"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-17 ${
                loaded ? "" : "opacity-0"
              } hover:animate-spin`}
            >
              <Image
                src="/images/flower-17.svg"
                alt="Flower 17"
                fill
                quality={100}
              />
            </div>
          </div>
        </div>
        <div
          id="statement1"
          className={`h-[calc(100dvh)] w-full flex flex-col items-center justify-center overflow-hidden bg-offwhite`}
        >
          <div className="flex flex-col items-center w-[85%] font-arya text-dark-green text-center">
              <h2
                className={`text-left
                  text-blg md:text-bxlg lg:text-bxlg xl:text-bxl  2xl:text-b2xl
              `}>
                Sunflower Capital partners at the earliest stage with companies building foundational infrastructure for modern enterprises, critical industries, and the physical world.
              </h2>
          </div>
        </div>
        <div
          id="statement2"
          className={`h-[calc(100dvh)] w-full flex flex-col items-center justify-center overflow-hidden bg-offwhite`}>
            {lg && <Ethos />}
            {!lg &&           
            <div className="w-[85%] flex flex-col gap-6">
              <h1 className="font-arya text-dark-green text-left
                        text-tmd
                        ">
                        Ethos
                        </h1>
                        <div className="flex flex-col font-bitter text-dark-green text-left
                        gap-6 lg:gap-8 xl:gap-10 2xl:gap-12
                        text-b5xs lg:text-bxs
              ">
              <h3>
                <span className="font-semibold xs:text-b4xs">We often write the first check to visionaries who act with urgency.</span> <br />
                We back founders with original insights, technical acumen, and insatiable ambition.
                Well before their founder journeys begin, we build deep-rooted, long-term relationships with product artisans who build with intention.
              </h3>
              <h3>
                <span className="font-semibold xs:text-b4xs">We partner with emerging category-defining leaders that endure.</span> <br />
                We invest in N-of-1 companies that marry defensible technology with novel go-to-market.
                Many create new markets or reimagine legacy industries through robust software, delightful UX, and superior incentives.  
              </h3>
              <h3>
                <span className="font-semibold xs:text-b4xs">We operate with the lens of over a decade of hard-earned experience.</span> <br />
                We bring the kind of context, case studies, and inside stories that don&apos;t exist online. 
                We don&apos;t chase consensus. We develop independent theses, move with conviction, and nail market timing.
              </h3>
              <h3>
                <span className="font-semibold xs:text-b4xs">We work on founders&apos; terms, not ours. </span> <br />
                Every founding team is unique. From day one, we proactively sow the seeds for our companies to blossom. 
                We help founders find product-market fit, hire world-class talent, and grow to their first few million in quality recurring revenue. 
              </h3>
                        </div>
            </div>
          }
        </div>
        <div
          id="portfolio"
          className="bg-offwhite text-dark-green w-full min-h-[calc(100dvh)] flex justify-center items-center overflow-hidden"
        >
          <PortfolioTable
            setScrollEnabled={setScrollEnabled}
            setScrollUpEnabled={setScrollUpEnabled}
            setScrollDownEnabled={setScrollDownEnabled}
            isMobile={isMobile}
          />
        </div>
        <div
          id="testimonials"
          className="relative bg-offwhite text-dark-green w-full min-h-[calc(100dvh)] flex flex-col overflow-hidden"
        >
            <Testimonials setScrollEnabled={setScrollEnabled} />
        </div>
        <div
          id="footer"
          className="relative bg-dark-green bg-contain bg-bottom md:bg-center md:bg-auto bg-[url('/images/footer-bgm.svg')] md:bg-[url('/images/footer-bg.svg')] bg-no-repeat w-full min-h-[calc(100dvh)] flex flex-col items-center justify-center overflow-hidden"
        >
                  <div className="flex flex-col justify-start items-center w-[85%] min-h-[calc(100dvh)]
        gap-32
        " id="footer">
            <div className='w-[85%] flex flex-col pt-36 
            '>
                <div className="flex flex-col w-fit h-fit bg-dark-green md:bg-none rounded-md gap-6 md:gap-12 p-4">
                  <h1 className="font-arya text-offwhite text-left
                      text-tmd md:text-txl
                      ">
                      Contact
                  </h1>
                  <a href="https://www.linkedin.com/company/sunflowercapital/" target="_blank" rel="noopener noreferrer">
                      <div className='flex flex-row
                      gap-3 md:gap-6
                      '>
                          <Image
                              src="/images/linkedin.svg"
                              alt="Connect with Sunflower Capital on LinkedIn"
                              width={18}
                              height={18}
                              className="hover:opacity-80 transition-opacity duration-300
                              h-6 w-6 md:h-12 md:w-12
                          "/>
                          <span className="text-offwhite font-bitter hover:cursor-pointer hover:underline decoration-[1px]
                          text-bsxm md:text-blg
                          ">
                              Sunflower Capital
                          </span>
                      </div>
                  </a>
                  <a href="https://sunflowercapital.substack.com/" target="_blank" rel="noopener noreferrer">
                      <div className='flex flex-row
                      gap-3 md:gap-6
                      '>
                          <Image
                              src="/images/email.svg"
                              alt="Subscribe to our newsletter"
                              width={18}
                              height={18}
                              className="hover:opacity-80 transition-opacity duration-30
                              h-6 w-6 md:h-12 md:w-12
                          "/>
                          <span className="text-offwhite font-bitter hover:cursor-pointer hover:underline decoration-[1px]
                          text-bsxm md:text-blg
                          ">
                              Subscribe to our newsletter
                          </span>
                      </div>
                  </a>
                  {mobile && <h1  className="font-bitter-italic text-offwhite">
                        © Sunflower Capital {year}
                  </h1>}
                </div>
            </div>
        </div>
        {!mobile && <Footer />}
        </div>
      </ReactPageScroller>
    </>
  );
};

export default App;