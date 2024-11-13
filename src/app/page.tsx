"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PortfolioTable from "@/components/PortfolioTable";
import Testimonials from "@/components/Testimonials";
import ReactPageScroller from "react-page-scroller";
import Footer from "@/components/Footer";
import DotNavigator from "@/components/DotNavigator";
import { isMobileDevice } from "@/libs/mobile";

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [scrollUpEnabled, setScrollUpEnabled] = useState(true);
  const [scrollDownEnabled, setScrollDownEnabled] = useState(true);
  const [breatheEnabled, setBreatheEnabled] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
    setTimeout(() => {
      setLoaded(true);
      setIsMobile(isMobileDevice());
    }, 500);

    const storedScrollTop = parseInt(
      localStorage.getItem("lastScrollTop") || "0",
      10
    );
    window.scrollTo(0, storedScrollTop);
  }, []);

  const expandFlower = () => {
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
      <DotNavigator currentScreen={currentPage} onDotClick={beforePageChange} isMobile={isMobile} />
      <ReactPageScroller
        customPageNumber={currentPage}
        blockScrollUp={!scrollEnabled && !scrollUpEnabled} 
        blockScrollDown={!scrollEnabled && !scrollDownEnabled}
        onBeforePageScroll={isMobile ? beforePageChange : undefined}
        pageOnChange={!isMobile ? beforePageChange : undefined}
        renderAllPagesOnFirstRender={true}
      >
        <div
          id="hero"
          className={`hero w-full landscape:h-screen portrait:h-[calc(100dvh)] relative overflow-hidden bg-dark-green 
                  flex portrait:flex-col justify-center portrait:items-center portrait:gap-10`}
        >
          <h1
            className={`title font-arya font-bold text-offwhite transition-all duration-1000 w-11/12 portrait:text-center 
            ${loaded ? "top-0" : "-top-full"}`}
          >
            SUNFLOWER <br /> CAPITAL
          </h1>

          <div className="flowerbox">
            <h2
              id="full-screen-message"
              className="z-10 fixed inset-0 flex items-center justify-center font-arya text-dark-green font-bold text-[6vw] opacity-0 transition-opacity duration-1000"
              // bg-[#ffe27c]
            >
              From Seed to Sunflower
            </h2>

            <div
              className={`flower flower-1 ${
                loaded ? "" : "opacity-0"
              } hover:animate-spin`}
            >
              <Image
                src="/images/flower-1.svg"
                alt="Flower 1"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-2 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/outline/flower-2.svg"
                alt="Flower 2"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-3 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/outline/flower-3.svg"
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
                src="/images/outline/flower-5.svg"
                alt="Flower 5"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-11 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/outline/flower-11.svg"
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
                src="/images/outline/flower-4.svg"
                alt="Center Flower"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-6 ${
                loaded ? "" : "opacity-0"
              } hover:animate-spin`}
            >
              <Image
                src="/images/flower-6.svg"
                alt="Flower 6"
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
                src="/images/outline/flower-7.svg"
                alt="Flower 7"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-8 ${
                loaded ? "" : "opacity-0"
              } hover:animate-spin`}
            >
              <Image
                src="/images/flower-8.svg"
                alt="Flower 8"
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
                src="/images/outline/flower-12.svg"
                alt="Flower 12"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-13 ${
                loaded ? "" : "opacity-0"
              } hover:animate-spin`}
            >
              <Image
                src="/images/flower-13.svg"
                alt="Flower 13"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-14 ${loaded ? "" : "opacity-0"} grow`}
            >
              <Image
                src="/images/outline/flower-14.svg"
                alt="Flower 14"
                fill
                quality={100}
              />
            </div>

            <div
              className={`flower flower-15 ${
                loaded ? "" : "opacity-0"
              } hover:animate-spin`}
            >
              <Image
                src="/images/flower-15.svg"
                alt="Flower 15"
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
                src="/images/outline/flower-17.svg"
                alt="Flower 17"
                fill
                quality={100}
              />
            </div>
          </div>
        </div>
        <div
          id="statement1"
          className={`h-[calc(100dvh)] w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-24 gap-10 xl:gap-14 bg-offwhite`}
        >
          <div className="flex flex-col items-center gap-5 lg:gap-8">
            <img
              src="/images/sunflower-logo.svg"
              alt="Sunflower Capital Logo"
              className={`h-24 sm:h-28 w-auto logoflower`}
            />
            <div className="w-4/5 font-bitter text-dark-green text-center">
              <h2
                className={`text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-loose sm:leading-loose lg:leading-loose xl:leading-loose`}
              >
                We invest at the earliest stage in companies building foundational infrastructure for modern enterprises, critical industries, and the physical world.
              </h2>
            </div>
          </div>
        </div>
        <div
          id="statement2"
          className="h-[calc(100dvh)] w-full bg-offwhite flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-24 gap-20 xl:gap-28"
        >
          <h2 className="font-bitter text-center w-4/5 md:w-11/12 md:text-[1.97vw] portrait:text-lg 
          leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed text-dark-green">
            We partner with missionary founders who are indefatigable, decisive,
            and self-aware. <br /> <br /> <br />
            We believe in forging highly personal, deep-rooted relationships
            that stand the test of time. <br /> <br /> <br />
            We develop distinct theses on markets and how they will unfold.
          </h2>
        </div>
        <div
          id="portfolio"
          className="bg-offwhite text-dark-green w-full min-h-[calc(100dvh)] flex justify-center items-center overflow-hidden"
        >
          <PortfolioTable
            setScrollEnabled={setScrollEnabled}
            setScrollUpEnabled={setScrollUpEnabled}
            setScrollDownEnabled={setScrollDownEnabled}
            currentPage={currentPage}
          />
        </div>
        <div
          id="testimonials"
          className="bg-offwhite text-dark-green w-full h-[calc(100dvh)] flex flex-col overflow-hidden"
        >
          <Testimonials setScrollEnabled={setScrollEnabled} />
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      </ReactPageScroller>
    </>
  );
};

export default App;