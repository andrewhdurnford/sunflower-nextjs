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
            <div className="flex items-center space-x-4 text-center">
                <div onClick={window.innerHeight > window.innerWidth ? scroll : undefined}>
                    <h1  className="font-bitter text-dark-green text-sm sm:text-base lg:text-lg xl:text-xl">
                    <span className={window.innerHeight > window.innerWidth ? 'inline' : 'hidden'}>↑ Back to Top </span>© Sunflower Capital 2024
                    </h1>
                </div>

                <a href="https://www.linkedin.com/in/liujiang1/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/linkedin.svg"
                        alt="Connect with Liu Jiang on LinkedIn"
                        width={18} 
                        height={18} 
                        className="hover:opacity-80 transition-opacity duration-300"
                    />
                </a>
                
                <a href="mailto:liu@sunflowercapital.co" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/email.svg"
                        alt="Contact Sunflower Capital via email"
                        width={18} 
                        height={18}
                        className="hover:opacity-80 transition-opacity duration-300"
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;