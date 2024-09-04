"use client"

import React, { useState, useEffect, useRef } from 'react';
import PortfolioTable from "@/components/PortfolioTable"; 
import Testimonials from '@/components/Testimonials';
import ReactPageScroller from 'react-page-scroller';
import Footer from '@/components/Footer';
import DotNavigator from '@/components/DotNavigator';

const App: React.FC = () => {
    const [loaded, setLoaded] = useState(false);
    const [scrollEnabled, setScrollEnabled] = useState(true);

    const filter = useRef({ filter: 'All' });
    const [_, forceUpdate] = useState(0);
    const setFilter = (newFilter: string) => {
        filter.current.filter = newFilter;
        forceUpdate(n => n + 1); 
    };

    const [currentPage, setCurrentPage] = useState(0);

    const pageOnChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 100);

        const storedScrollTop = parseInt(localStorage.getItem('lastScrollTop') || '0', 10);
        window.scrollTo(0, storedScrollTop);
    });

    const expandFlower = () => {

        console.log('called')
        const message = document.getElementById('full-screen-message');
        const centerflower = document.getElementById('center-flower');
        if (!(currentPage === 0) || !message || !centerflower) return;


        centerflower.style.transition = 'transform 2s ease-in-out';
        if (window.innerHeight > window.innerWidth) {
            centerflower.style.transform = 'scale(160)';
        } else {
            centerflower.style.transform = 'scale(80)';
        }
        setTimeout(() => {
            message.classList.add('opacity-100');
        }, 1000);

        setTimeout(() => {
            if (centerflower) centerflower.style.transform = 'scale(1)';
            message.classList.remove('opacity-100');
        }, 2000);
    };

    return (
      <>
        <DotNavigator currentScreen={currentPage} onDotClick={pageOnChange} />
        <ReactPageScroller
            customPageNumber={currentPage}
            pageOnChange={pageOnChange}
            blockScrollUp={!scrollEnabled}   
            blockScrollDown={!scrollEnabled}
        >
            <div
                id="hero"
                className={`w-full h-full relative overflow-hidden bg-dark-green`}
            >
                <div
                id="center-flower"
                onClick={expandFlower}
                className={`z-10 flower flower-4 bg-[url('/images/outline/flower-4.svg')] transition-all duration-2000
                ${loaded ? '' : 'opacity-0'}`}
                ></div>
                <div
                    id="full-screen-message"
                    className="z-10 fixed inset-0 flex items-center justify-center bg-[#FFDF22] font-arya text-dark-green font-bold text-[6vw] opacity-0 transition-opacity duration-1000"
                >
                    GROW WITH SUNFLOWER CAPITAL
                </div>
                <div
                    className={`title font-arya font-bold text-offwhite transition-all duration-1000  ${loaded ? 'top-0' : '-top-full'}`} 
                    >
                    SUNFLOWER CAPITAL
                </div>
                <div className={`flower flower-1 bg-[url('/images/flower-1.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
                <div className={`flower flower-2 bg-[url('/images/outline/flower-2.svg')] ${loaded ? '' : 'opacity-0'} grow`}></div>
                <div className={`flower flower-3 bg-[url('/images/outline/flower-3.svg')] ${loaded ? '' : 'opacity-0'} grow`}></div>
                <div className={`flower flower-5 bg-[url('/images/outline/flower-5.svg')] ${loaded ? '' : 'opacity-0'} grow`}></div>
                <div className={`flower flower-6 bg-[url('/images/flower-6.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
                <div className={`flower flower-7 bg-[url('/images/outline/flower-7.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
                <div className={`flower flower-8 bg-[url('/images/flower-8.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
                <div className={`flower flower-9 bg-[url('/images/flower-9.svg')] ${loaded ? '' : 'opacity-0'} grow`}></div>
                <div className={`flower flower-10 bg-[url('/images/flower-10.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
                <div className={`flower flower-11 bg-[url('/images/outline/flower-11.svg')] ${loaded ? '' : 'opacity-0'} grow`}></div>
                <div className={`flower flower-12 bg-[url('/images/outline/flower-12.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
                <div className={`flower flower-13 bg-[url('/images/flower-13.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
                <div className={`flower flower-14 bg-[url('/images/outline/flower-14.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
                <div className={`flower flower-15 bg-[url('/images/flower-15.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
                <div className={`flower flower-16 bg-[url('/images/flower-16.svg')] ${loaded ? '' : 'opacity-0'} grow`}></div>
                <div className={`flower flower-17 bg-[url('/images/outline/flower-17.svg')] ${loaded ? '' : 'opacity-0'} hover:animate-spin`}></div>
            </div>
            <div
                id="statement1"
                className={`h-full w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-24 gap-10 xl:gap-14 bg-offwhite`}
            >
                <div className="flex flex-col items-center gap-5 lg:gap-8">
                    <img src="/images/sunflower-logo.svg" alt="Sunflower" className="h-24 sm:h-28 w-auto" />
                    <div className="w-11/12 sm:w-4/5 font-bitter text-dark-green text-center">
                        <div className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-loose sm:leading-loose lg:leading-loose xl:leading-loose">
                            We invest at the earliest stage in companies building foundational picks and shovels infrastructure.
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="statement2"
                className="h-full w-full bg-offwhite flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-24 gap-20 xl:gap-28"
            >
                <div className="w-11/12 font-bitter text-dark-green text-center">
                    <div className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[1.85vw] sm:leading-relaxed text-dark-green">
                        We partner with missionary founders who are indefatigable, decisive, and self-aware. <br /> <br />
                        We believe in forging highly personal, deep-rooted relationships that stand the test of time. <br /> <br />
                        We develop distinct theses on markets and how they will unfold.
                    </div>
                </div>
            </div>
            <div
                id="portfolio"
                className="bg-offwhite text-dark-green w-full min-h-full flex justify-center items-center overflow-hidden px-4 sm:px-8 lg:px-32"
            >
                <PortfolioTable proxyData={filter.current} setFilter={setFilter} setScrollEnabled={setScrollEnabled}  />
            </div>
            <div
                id="testimonials"
                className="bg-offwhite text-dark-green w-full h-full flex flex-col overflow-hidden"
            >
                <Testimonials />
                <Footer setCurrentPage={setCurrentPage} />
            </div>
        </ReactPageScroller>
      </>
    );
};

export default App;