import React from 'react';

function MainContainer({children}: { children: React.ReactNode }) {
    return (
        <div className="mx-auto container max-w-[90rem] px-2 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}

export default MainContainer;