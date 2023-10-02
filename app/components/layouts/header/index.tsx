import React from 'react';
import Image from "next/image";

function Index() {
    return (
        <nav className="bg-white mt-2">
            <div className="relative flex h-16 items-center justify-center">
                <div className="hidden sm:block absolute left-0">
                    <div className="flex justify-between items-center">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a
                            href="#"
                            className="transform transition duration-500 hover:scale-105 text-gray-600 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                        >
                            نمایشگاه
                        </a>

                        <a
                            href="#"
                            className="transform transition duration-500 hover:scale-105 text-gray-600 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                        >
                            محتوای تخصصی
                        </a>
                        <a
                            href="#"
                            className="transform transition duration-500 hover:scale-105 text-gray-600 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                        >
                            باشگاه مشتریان
                        </a>
                    </div>
                </div>
                <Image alt="electotec logo" width={200} height={200} src={"/logo.png"} className="mt-2"/>
                <button
                    className="bg-red-600 font-semibold transform transition duration-500 hover:scale-105 text-white py-2 px-3 rounded-lg absolute right-0">
                    شناخت الکتوتک
                </button>
            </div>
        </nav>
    );
}

export default Index;