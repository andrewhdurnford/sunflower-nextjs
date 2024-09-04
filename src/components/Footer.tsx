import React from 'react';

interface FooterProps {
    setCurrentPage: (page: number) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {

    const scroll = () => {
        setCurrentPage(0);
    };

    return (
        <div className="flex justify-center items-center w-full h-20 sm:h-24 bg-offwhite px-4 sm:px-8" id="footer">
            <div
                onClick={scroll} 
                className="text-center cursor-pointer"
            >
                <h1 className="font-bitter text-darkish-brown text-sm sm:text-base lg:text-lg xl:text-xl pl-4 sm:pl-8">
                    ↑ Back to Top © Sunflower Capital 2024
                </h1>
            </div>
        </div>
    );
};

export default Footer;