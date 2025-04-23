import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="absolute bottom-0 left-0 w-full">
            <div className="flex flex-row justify-center items-center w-full gap-6 h-20 xl:h-24 bg-offwhite px-4 sm:px-8" id="footer">
                <div className="flex items-center space-x-4 text-center">
                    <h1  className="font-bitter text-dark-green text-xxs">
                        © Sunflower Capital {year}
                    </h1>
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
        </div>
    );
};

export default Footer;