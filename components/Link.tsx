import React from "react";

interface LinkProps {
    href: string;
    text: string;
    className?: string;
}

export default function Link({ href, text, className }: LinkProps) {
    return (
        <a href={href} className={`${className || ""} flex items-center gap-3 item-shadow link  transition-all`}>
            <span className="text-5xl uppercase hover:underline">{text}</span>
            <svg
            className="w-4"
                width="110"
                height="220"
                viewBox="0 0 110 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M27.5 220H0V0H27.5L27.5 27.5H55L55 68.75H82.5V96.25H110V123.75H82.5V151.25H55L55 192.5H27.5L27.5 220Z"
                    fill="white"
                />
            </svg>
        </a>
    );
}
