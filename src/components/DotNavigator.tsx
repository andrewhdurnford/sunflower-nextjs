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
                    className={`dot
                    ${
                        index === currentScreen ? 
                            currentScreen === 0 ? 'bg-offwhite scale-125' : 'bg-dark-green scale-125' 
                        : 
                            currentScreen === 0 ? 'bg-offwhite opacity-20 scale-75' : 'bg-dark-green opacity-20 scale-75' 
                    }`}
                    onClick={() => onDotClick(index)}
                ></div>
            ))}
        </div>
    );
};

export default DotNavigator;
