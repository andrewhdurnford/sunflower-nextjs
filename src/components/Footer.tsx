import React from 'react';
import Image from 'next/image';

interface FooterProps {
    setCurrentPage: (page: number) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {

    const scroll = () => {
        setCurrentPage(0);
    };

    return (
        <div className="flex flex-row justify-center items-center w-full gap-6 h-20 sm:h-24 bg-offwhite px-4 sm:px-8" id="footer">
            <div onClick={scroll} className="flex items-center space-x-4 text-center cursor-pointer">
                <h1 className="font-bitter text-darkish-brown text-sm sm:text-base lg:text-lg xl:text-xl">
                    ↑ Back to Top © Sunflower Capital 2024
                </h1>

                <a href="https://www.linkedin.com/in/liujiang1/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/linkedin.svg"
                        alt="LinkedIn"
                        width={20} 
                        height={20} 
                        className="hover:opacity-80 transition-opacity duration-300"
                    />
                </a>
                
                <a href="mailto:info@sunflowercapital.com" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/email.svg"
                        alt="Email"
                        width={30} 
                        height={30}  
                        className="hover:opacity-80 transition-opacity duration-300"
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;