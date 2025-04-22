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
                if (currentScreen === index) {
                    return 'scale-150 opacity-100';
                } else if (currentScreen === 0 && currentScreen !== index) {
                    return 'scale-100 hover:scale-125 opacity-20';
                } else {
                    return 'scale-100 hover:scale-125 opacity-40';
                }
            })();

            return (
                <img
                key={`${isMobile}-${index}`}
                src={currentScreen === 0 ? '/images/dot1.svg' : '/images/dot2.svg'}
                alt={`dot ${index}`}
                className={`dot ${dotClass} transition-all duration-300 hover:cursor-pointer`}
                onClick={() => onDotClick(index)}
                />
            );
            })}
        </div>
    );
};

export default DotNavigator;
