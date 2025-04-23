import React from 'react';

interface MenuProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Menu: React.FC<MenuProps> = ({ currentPage, setCurrentPage }) => {
    const [active, setActive] = React.useState(false);

    return (
        <>
            <div 
            className={`fixed top-0 right-0 xs:top-6 xs:right-6 w-24 h-24 rounded-full flex items-center justify-center z-20 duration-1000
            bg-dark-green ${active ? 'scale-[50] bg-opacity-100' : 'bg-opacity-0'}
            `}
            onClick={() => setActive(!active)}
            >
            <svg
                 className={`w-10 h-10
                    ${active ? 'opacity-0 pointer-events-none delay-0' : 'opacity-100 pointer-events-auto delay-[1000ms] transition-opacity duration-500'}`}
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    className="transition-stroke duration-300"
                    d="M3 6H39"
                    stroke={currentPage === 0 || currentPage === 5 ? '#FFF9DE' : '#FFDF22'}
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <path
                    className="transition-stroke duration-300"
                    d="M3 18H39"
                    stroke={currentPage === 0 || currentPage === 5 ? '#FFF9DE' : '#FFDF22'}
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <path
                    className="transition-stroke duration-300"
                    d="M3 30H39"
                    stroke={currentPage === 0 || currentPage === 5 ? '#FFF9DE' : '#FFDF22'}
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                </svg>
            </div>
            <div   className={`
                fixed top-0 left-0 w-full h-full z-40 transition-opacity duration-1000
                ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}>
                <div 
                    className="fixed top-0 right-0 xs:top-6 xs:right-6 w-24 h-24 rounded-full flex items-center justify-center z-20 transition-colors duration-300
                    "
                    onClick={() => setActive(!active)}
                    >
                    <svg
                        className='w-10 h-10'
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            className="transition-stroke duration-300"
                            d="M3 6H39"
                            stroke={currentPage === 0 || currentPage === 5 ? '#FFF9DE' : '#FFDF22'}
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <path
                            className="transition-stroke duration-300"
                            d="M3 18H39"
                            stroke={currentPage === 0 || currentPage === 5 ? '#FFF9DE' : '#FFDF22'}
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <path
                            className="transition-stroke duration-300"
                            d="M3 30H39"
                            stroke={currentPage === 0 || currentPage === 5 ? '#FFF9DE' : '#FFDF22'}
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        </svg>
                </div>
                <div className={`flex flex-col menuitem items-start justify-center w-full h-full p-[10%] gap-8 text-offwhite font-arya text-tlg 2xs:text-txl xs:text-t2xl
                    transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}
                `}>
                    <h1 onClick={() => { setCurrentPage(1); setActive(false); }}>MISSION</h1>
                    <h1 onClick={() => { setCurrentPage(2); setActive(false); }}>ETHOS</h1>
                    <h1 onClick={() => { setCurrentPage(3); setActive(false); }}>PORTFOLIO</h1>
                    <h1 onClick={() => { setCurrentPage(4); setActive(false); }}>FOUNDERS</h1>
                    <h1 onClick={() => { setCurrentPage(5); setActive(false); }}>CONTACT</h1>
                </div>
            </div>
        </>
    );
};

export default Menu;