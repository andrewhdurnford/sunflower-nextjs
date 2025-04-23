import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

const Footer: React.FC = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="flex flex-col justify-start items-center w-[85%] min-h-[calc(100dvh)] bg-dark-green
        xl:gap-32
        " id="footer">
            <div className='w-[85%] flex flex-col pt-36
            xl:gap-12
            '>
                <h1 className="font-arya text-offwhite text-left 
                    2xl:text-txl
                    ">
                    Contact
                </h1>
                <a href="https://www.linkedin.com/in/liujiang1/" target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-row
                    2xl:gap-6
                    '>
                        <Image
                            src="/images/linkedin.svg"
                            alt="Connect with Sunflower Capital on LinkedIn"
                            width={18}
                            height={18}
                            className="hover:opacity-80 transition-opacity duration-300 
                            2xl:h-12 2xl:w-12
                        "/>
                        <span className="text-offwhite font-bitter hover:cursor-pointer hover:underline decoration-[1px]
                        2xl:text-blg
                        ">
                            Sunflower Capital
                        </span>
                    </div>
                </a>
                <a href="mailto:liu@sunflowercapital.co" target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-row
                    2xl:gap-6
                    '>
                        <Image
                            src="/images/email.svg"
                            alt="Contact Sunflower Capital via email"
                            width={18}
                            height={18}
                            className="hover:opacity-80 transition-opacity duration-30
                            2xl:h-12 2xl:w-12
                        "/>
                        <span className="text-offwhite font-bitter hover:cursor-pointer hover:underline decoration-[1px]
                        2xl:text-blg
                        ">
                            Subscribe to our newsletter
                        </span>
                    </div>
                </a>
                <h1  className="font-bitter text-offwhite text-left
                    2xl:text-bxs
                ">
                    © Sunflower Capital {year}
                </h1>
            </div>
        </div>
    );
};

export default Footer;