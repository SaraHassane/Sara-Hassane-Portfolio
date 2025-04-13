import React from 'react'

export const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon: React.ReactNode,
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
        <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2
        focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
        bg-[conic-gradient(from_180deg_at_50%_50%,theme(colors.cyan.400)_0%,#A5B4FC_25%,#C4B5FD_50%,theme(colors.purple.500)_75%,theme(colors.cyan.400)_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
        bg-[#0c0624] px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
        </button>

  )
}
