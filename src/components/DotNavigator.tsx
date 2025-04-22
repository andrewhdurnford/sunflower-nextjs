import React from 'react';

interface DotNavigatorProps {
    currentScreen: number;
    onDotClick: (index: number) => void;
    isMobile: boolean;
}

const DotNavigator: React.FC<DotNavigatorProps> = ({ currentScreen, onDotClick, isMobile }) => {
    const totalScreens = 5;

    return (
        <div className="dot-container flex gap-2">
            {Array.from({ length: totalScreens }).map((_, index) => {
            const dotClass = (() => {
                // if (index === currentScreen) {
                // return currentScreen === 0
                //     ? 'bg-offwhite scale-125'
                //     : 'bg-dark-green scale-125';
                // } else {
                // if (currentScreen === 0) {
                //     return isMobile
                //     ? 'bg-offwhite opacity-20 scale-125'
                //     : 'bg-offwhite opacity-20 scale-75';
                // } else {
                //     return isMobile
                //     ? 'bg-dark-green opacity-20 scale-125'
                //     : 'bg-dark-green opacity-20 scale-75';
                // }
                // }
            })();

            return (
                <img
                key={`${isMobile}-${index}`}
                src={'/images/dot.svg'}
                alt={`dot ${index}`}
                className={`dot ${dotClass} transition-all duration-300 hover:cursor-pointer ${currentScreen === index ? 'scale-150 opacity-100' : 'hover:scale-125 opacity-50'}`}
                onClick={() => onDotClick(index)}
                />
            );
            })}
        </div>
    );
};

export default DotNavigator;
