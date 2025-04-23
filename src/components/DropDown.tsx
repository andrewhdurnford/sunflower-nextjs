import React, { useState } from 'react';

interface DropDownProps {
    question: string;
    answer1: string;
    answer2: string;
    isExpanded: boolean;
}

const DropDown = ({ question, answer1, answer2, isExpanded }: DropDownProps) => {


    return (
        <button className={`flex-row w-full px-6 py-3 xl:py-4 2xl:py-8 justify-around items-center bg-dark-green text-dark-green rounded-lg lg:min-h-16 xl:min-h-24 2xl:min-h-28
            lg:text-b3xs xl:text-bxs 2xl:text-bsm
        ${isExpanded ? 'bg-opacity-20' : 'bg-opacity-10'}`}>
            <div className={`flex items-center justify-between`}>
                <p className='font-semibold'>{question}</p>
                <div>
                    <img src={isExpanded ? '/images/x.svg' : '/images/plus.svg'} alt={isExpanded ? 'x' : '+'} className='lg:h-4 lg:w-4 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10' />

                </div>
            </div>
            <div className={`transition-all origin-top duration-500 ease-in-out overflow-x-hidden overflow-y-scroll mt-2
            flex flex-col gap-3 noscroll
            lg:text-b4xs xl:text-b2xs 2xl:text-bxs
            ${isExpanded ? 'scale-y-100 max-h-28' : 'scale-y-0 max-h-0'}`}
            >
                <p className="text-left">{answer1}</p>
                <p className="text-left">{answer2}</p>
            </div>
        </button>
    );
};

export default DropDown;