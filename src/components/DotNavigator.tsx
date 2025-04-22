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
<<<<<<< Updated upstream
                    className={`dot
                    ${
                        index === currentScreen ? 
                            currentScreen === 0 ? 'bg-offwhite scale-125' : 'bg-dark-green scale-125' 
                        : 
                            currentScreen === 0 ? 'bg-offwhite opacity-20 scale-75' : 'bg-dark-green opacity-20 scale-75' 
=======
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
                                    } else {
                                        return 'bg-offwhite opacity-20 scale-75'
                                    }
                                } else {
                                    if (isMobile) {
                                        return 'bg-dark-green opacity-20 scale-125';
                                    } else {
                                        return 'bg-dark-green opacity-20 scale-75';
                                    }
                                }
                            }
                        })()
>>>>>>> Stashed changes
                    }`}
                    onClick={() => onDotClick(index)}
                ></div>
            ))}
        </div>
    );
};

export default DotNavigator;
