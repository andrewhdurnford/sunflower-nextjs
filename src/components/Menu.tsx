import React from 'react';

interface MenuProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Menu: React.FC<MenuProps> = ({ currentPage, setCurrentPage }) => {
    return (
        <div className='menu w-full h-full fixed top-0 left-0 z-50'>
            <div className='fixed top-12 right-12 menu w-10 h-10 flex items-center justify-center'>
            <svg
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M3 6H39" stroke={`${currentPage === 0 || currentPage === 5 ? '#FFF9DE' : '#03351A'}`} strokeWidth="5" strokeLinecap="round" />
                <path d="M3 18H39" stroke={`${currentPage === 0 || currentPage === 5 ? '#FFF9DE' : '#03351A'}`} strokeWidth="5" strokeLinecap="round" />
                <path d="M3 30H39" stroke={`${currentPage === 0 || currentPage === 5 ? '#FFF9DE' : '#03351A'}`} strokeWidth="5" strokeLinecap="round" />
            </svg>
            </div>
        </div>
    );
};

export default Menu;