import React from 'react';

interface DotNavigatorProps {
    currentScreen: number;
    onDotClick: (index: number) => void;
    isMobile: boolean;
}

const DotNavigator: React.FC<DotNavigatorProps> = ({ currentScreen, onDotClick, isMobile }) => {
    const totalScreens = 5;



    return (
        <div className="dot-container">
            {Array.from({ length: totalScreens }).map((_, index) => (
                <div
                    key={index}
                    className={`dot ${
                        (() => {
                            if (index === currentScreen) {
                                if (currentScreen === 0) {
                                    return 'bg-offwhite scale-125';
                                } else {
                                    return 'bg-dark-green scale-125';
                                }
                            } else {
                                if (currentScreen === 0) {
                                    if (isMobile) {
                                        return 'bg-offwhite opacity-20 scale-125';
                                    }
                                    return 'bg-offwhite opacity-20 scale-75';
                                } else {
                                    if (isMobile) {
                                        return 'bg-dark-green opacity-20 scale-125';
                                    }
                                    return 'bg-dark-green opacity-20 scale-75';
                                }
                            }
                        })()
                    }`}
                    onClick={() => onDotClick(index)}
                ></div>
            ))}
        </div>
    );
};

export default DotNavigator;
