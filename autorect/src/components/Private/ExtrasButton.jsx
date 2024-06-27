import { useState } from "react";

export function ExtraButton({ text,nameicon }) {
    const [hovered, setHovered] = useState(false);
    return (
        <>
            <button onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)} className="text-gray-500 font-medium text-sm border-2 border-gray-500 rounded-xl w-24 h-8 flex justify-center items-center gap-2 hover:bg-gray-500 hover:text-white">{text}<box-icon name={nameicon} size='20px' color={hovered ? 'white' : '#6B7280'}></box-icon>
            </button>
        </>
    )
}