"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PortfolioTable from "@/components/PortfolioTable";
import Testimonials from "@/components/Testimonials";
import ReactPageScroller from "react-page-scroller";
import Footer from "@/components/Footer";
import DotNavigator from "@/components/DotNavigator";
import {isMobile} from 'react-device-detect';
import { before } from "node:test";

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
    setMobile(isMobile);
    if (isMobile) {
      setLoaded(true);
    } else {
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    }
  }, []);

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
          className="h-[calc(100dvh)] w-full bg-offwhite flex flex-col items-center justify-center overflow-hidden 
          gap-6 lg:gap-8 xl:gap-10 2xl:gap-12
        ">
          <h1 className="font-arya text-dark-green w-[85%] text-left
          text-tmd xl:text-tlg 2xl:text-txl
          ">
          Ethos
          </h1>
          <div className="flex flex-col font-bitter text-dark-green text-left w-[85%] 
          gap-6 lg:gap-8 xl:gap-10 2xl:gap-12
          text-b4xs xs:text-b3xs lg:text-bxs xl:text-bmd 2xl:text-blg
            ">
            <h3>We partner with relentless missionary founders who are skilled product artisans. We forge highly personal, deep-rooted relationships well in advance of incorporation.</h3>
            <h3>We are often the first check. We invest in N of 1 category creators with technical moats and upstarts transforming legacy industries with novel go-to-market.</h3>
            <h3>We have more than a decade of inside stories and firsthand experience that cannot be found online. We nail market timing and develop distinct theses on markets.</h3>
            <h3>We collaborate with founders on their terms. From day one, we proactively help them build category-defining companies – finding product-market fit, growing to the first few million in quality recurring revenue, and hiring world-class talent.</h3>
          </div>
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
        {!mobile && <div
          id="support"
          className="h-[calc(100dvh)] w-full bg-offwhite flex flex-col items-center justify-center overflow-hidden"
        >
          <h1 className="font-arya text-dark-green w-[85%] text-left pb-6 xl:pb-12
          text-tmd xl:text-tlg 2xl:text-txl
          ">
            Support
          </h1>
            <h2 className="font-bitter text-dark-green w-[85%] text-left xl:pb-3
              md:text-b3xs xl:text-bxsm 2xl:text-blg 2xl:leading-md leading-lg
            ">
              There&apos;s <span className="font-bitter-italic">no standard playbook</span> for success - 
              our team and global network of world-class operators, domain experts, founders, and customers get involved where and when it matters the most.
            </h2>
            <div className="flex w-[85%] gap-6">
              <div className="flex flex-row w-full font-bitter text-left text-dark-green
                lg:gap-8 xl:gap-10 2xl:gap-12
                text-b5xs xs:text-b4xs md:text-bxs 2xl:text-bmd leading-xl xs:leading-xl md:leading-xl lg:leading-xl xl:leading-xl 2xl:leading-xl 
              ">
                <div className="flex flex-col  items-center w-1/2">
                  <div className="2xl:translate-y-10 xl:translate-y-8 lg:translate-y-6 md:translate-y-4
                  w-11/12 text-center bg-dark-green rounded-full text-offwhite">Product & Growth</div>
                  <div className="flex w-full bg-dark-green bg-opacity-10 rounded-md p-4 pt-10">
                    Refine early product and define roadmap <br />
                    Close initial design partners <br />
                    Scale sales and marketing teams <br />
                    Develop growth and DevRel strategies <br />
                    Recruit top-tier engineers <br />
                  </div>
                </div>
                <div className="flex flex-col  items-center w-1/2">
                <div className="2xl:translate-y-10 xl:translate-y-8 lg:translate-y-6 md:translate-y-4
                w-11/12 text-center bg-dark-green rounded-full text-offwhite">Go-to-Market & Branding</div>
                  <div className="flex w-full bg-dark-green bg-opacity-10 rounded-md p-4 pt-10">
                    Sharpen brand positioning and messaging <br />
                    Craft customer collateral and website content <br />
                    Establish monetization and pricing models <br />
                    Negotiate contracts and form partnerships  <br />
                    Orchestrate funding rounds and media launches  <br />
                  </div>
                </div>
              </div>
            </div>
        </div>}
        {mobile &&         <div
          id="support"
          className="h-[calc(100dvh)] w-full bg-offwhite flex flex-col items-center justify-center overflow-hidden gap-6 xl:gap-12"
        >
          <h1 className="font-arya text-dark-green w-[85%] text-left
          text-tmd xl:text-tlg 2xl:text-txl
          ">
            Support
          </h1>
            <h2 className="font-bitter text-dark-green w-[85%] text-left 
              md:text-b3xs xl:text-bxsm 2xl:text-blg 2xl:leading-md leading-lg
            ">
              There&apos;s <span className="font-bitter-italic">no standard playbook</span> for success - 
              our team and global network of world-class operators, domain experts, founders, and customers get involved where and when it matters the most.
            </h2>
            <div className="flex w-[85%] gap-6">
              <div className="w-2.5 bg-dark-green opacity-20 h-full rounded-full block lg:hidden">
                &nbsp;
              </div>
              <div className="flex flex-col lg:flex-row w-full font-bitter text-left text-dark-green
                text-b5xs xs:text-b4xs
              ">
                <div className="flex">
                  <div>
                    Refine early product and define roadmap <br />
                    Close initial design partners <br />
                    Scale sales and marketing teams <br />
                    Develop growth and DevRel strategies <br />
                    Recruit top-tier engineers <br />
                    Sharpen brand positioning and messaging <br />
                    Craft customer collateral and website content <br />
                    Establish monetization and pricing models <br />
                    Negotiate contracts and form partnerships  <br />
                    Orchestrate funding rounds and media launches  <br />
                  </div>
                </div>
              </div>
            </div>
        </div>}
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