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
                    if (index === currentScreen) {
                        return currentScreen === 0
                            ? 'bg-offwhite scale-125'
                            : 'bg-dark-green scale-125';
                    } else {
                        if (currentScreen === 0) {
                            return isMobile
                                ? 'bg-offwhite opacity-20 scale-125'
                                : 'bg-offwhite opacity-20 scale-75';
                        } else {
                            return isMobile
                                ? 'bg-dark-green opacity-20 scale-125'
                                : 'bg-dark-green opacity-20 scale-75';
                        }
                    }
                })();

                return (
                    <div
                        key={`${isMobile}-${index}`}
                        className={`dot transform ${dotClass} transition-transform duration-300`}
                        onClick={() => onDotClick(index)}
                    ></div>
                );
            })}
        </div>
    );
};

export default DotNavigator;
