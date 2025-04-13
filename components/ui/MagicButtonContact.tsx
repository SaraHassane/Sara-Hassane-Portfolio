import React from 'react';

export const MagicButtonContact = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2
        focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses || ''}`}
    >
       
      {/* Gradient Border spinning with updated colors */}
      <span
        className="absolute inset-[-1000%] opacity-45 animate-[spin_4s_linear_infinite] rounded-full"
        style={{
          backgroundImage: `conic-gradient(
            from 180deg at 50% 50%,
            #164e63 0%,
            #6b6c7c 25%,
            #6d58ad 50%,
            #164e63 75%,
            #6d58ad 100%
          )`,
        }}
      />

      {/* Button Inner Content */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
         px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl relative z-10">
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};
