"use client";

import { useEffect, useState, ReactNode } from "react";

interface TracingBeamProps {
    children?: ReactNode;
    className?: string;
}

export function TracingBeam({ children, className }: TracingBeamProps) {
    const [height, setHeight] = useState("0%");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setHeight(`${scrolled}%`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={` h-screen w-[1px] bg-[#a1d9dc]/20 transition-all duration-300 ease-linear z-10 ${className}`}>
            <div
                id="progress-line"
                className={` w-[1px] bg-gradient-to-b from-purple-700 via-blue-500 to-cyan-400 transition-all duration-300 ease-linear z-10 ${className}`}
                style={{ height }}
            >
                {children}
            </div>
        </div>
    );
}
