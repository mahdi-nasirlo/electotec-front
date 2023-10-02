"use client"
import React, {useEffect, useState} from 'react';


function HeaderContainer({children}: { children: React.ReactNode }) {

    const [top, setTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <header
            className={`sticky top-0 bg-white z-[200] w-full ${!top && "shadow-sm backdrop-blur-[10px] opacity-[0.98] border-b-[1.5px] py-2"}`}>
            {children}
        </header>
    );
}

export default HeaderContainer;