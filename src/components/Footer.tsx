import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="absolute bottom-0 left-0 w-full">
            <div className="flex flex-row justify-center items-center w-full gap-6 h-20 sm:h-24 px-4 sm:px-8" id="footer">
                <div className="flex items-center text-center p-4 bg-dark-green rounded-md">
                    <h1  className="font-bitter text-offwhite text-sm sm:text-base lg:text-lg xl:text-xl">
                        © Sunflower Capital {year}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;