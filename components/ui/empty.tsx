import React from 'react';
import Image from "next/image";

interface PropsType {
    title?: React.ReactNode | string,
    className?: React.HTMLAttributes<HTMLDivElement>["className"]
}

const Empty = (props: PropsType) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <Image className={props.className} src={"/icons/empty.svg"} alt={"empty icon"} width={50} height={50}/>
            <p className="my-2 text-sm font-normal text-gray-400">
                {props.title}
            </p>
        </div>
    );
};

export default Empty;