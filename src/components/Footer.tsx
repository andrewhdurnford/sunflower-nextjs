import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

const Footer: React.FC = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="flex flex-row justify-center items-center w-[85%] min-h-[calc(100dvh)] bg-dark-green
        xl:gap-32
        " id="footer">
            <div className='w-[46.5%] flex flex-col
            xl:gap-12'>
                <h1 className="font-arya text-offwhite text-left 
                xl:text-txl
                ">
                    Subscribe
                </h1>
                <iframe
                  id="Substack"
                  src="https://andrewhdurnford.substack.com/embed"
                  height="320"
                  style={{ background: '#03351A', fontFamily: 'Bitter', borderRadius: '8px', border: 'none', width: '70%' }}
                ></iframe>
            </div>
            <div className='w-[46.5%] flex flex-col
            xl:gap-12
            '>
                <h1 className="font-arya text-offwhite text-left 
                    xl:text-txl
                    ">
                    Contact
                </h1>
                <div className="flex flex-col items-left text-left
                xl:gap-6
                ">
                    <a href="https://www.linkedin.com/in/liujiang1/" target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-row
                        xl:gap-6
                        '>
                            <Image
                                src="/images/linkedin.svg"
                                alt="Connect with Sunflower Capital on LinkedIn"
                                width={18}
                                height={18}
                                className="hover:opacity-80 transition-opacity duration-300 
                                xl:h-12 xl:w-12
                            "/>
                            <span className="text-offwhite font-bitter hover:cursor-pointer hover:underline decoration-[1px]
                            xl:text-blg
                            ">
                                Sunflower Capital
                            </span>
                        </div>
                    </a>
                    <a href="mailto:liu@sunflowercapital.co" target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-row
                        xl:gap-6
                        '>
                            <Image
                                src="/images/email.svg"
                                alt="Contact Sunflower Capital via email"
                                width={18}
                                height={18}
                                className="hover:opacity-80 transition-opacity duration-30
                                xl:h-12 xl:w-12
                            "/>
                            <span className="text-offwhite font-bitter hover:cursor-pointer hover:underline decoration-[1px]
                            xl:text-blg
                            ">
                                liu@sunflowercapital.co
                            </span>
                        </div>
                    </a>
                </div>
                <h1  className="font-bitter text-offwhite text-xxs text-left">
                    © Sunflower Capital {year}
                </h1>
            </div>
        </div>
    );
};

export default Footer;