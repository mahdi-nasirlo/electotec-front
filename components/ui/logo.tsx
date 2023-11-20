import React from 'react';
import Image from "next/image";

const Logo = ({width = 175, height = 175}: { width?: number, height?: number }) => {
    return (
        <div>
            <Image alt="electotec logo" width={175} height={175} src={"/logo.svg"}
                   className="mt-2 max-h-full"/>
        </div>
    );
};

export default Logo;