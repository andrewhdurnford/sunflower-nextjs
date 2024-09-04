import React from 'react';

interface DotNavigatorProps {
    currentScreen: number;
    onDotClick: (index: number) => void;
}

const DotNavigator: React.FC<DotNavigatorProps> = ({ currentScreen, onDotClick }) => {
    const totalScreens = 5;



    return (
        <div className="dot-container">
            {Array.from({ length: totalScreens }).map((_, index) => (
                <div
                    key={index}
                    className={`dot ${
                        index === currentScreen ? 
                        currentScreen === 0 ? 'bg-offwhite' : 'bg-offblack' 
                        : 
                        currentScreen === 0 ? 'bg-offwhite opacity-20' : 'bg-offblack opacity-20' 
                    }`}
                    onClick={() => onDotClick(index)}
                ></div>
            ))}
        </div>
    );
};

export default DotNavigator;
