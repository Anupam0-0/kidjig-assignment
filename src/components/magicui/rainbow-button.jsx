import React from "react";
import { cn } from "@/lib/utils";


export const RainbowButton = (
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "relative inline-flex h-[34px] cursor-pointer items-center justify-center rounded-md border-0 px-[22px] py-1 font-medium text-neutral-100 dark:text-slate-950 capitalize transition-colors",
          "bg-[length:200%] animate-rainbow",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50",
          "[background-clip:padding-box,border-box,border-box] [background-origin:border-box]",
          "[border:calc(0.08rem)_solid_transparent]",
          // Glow effect using ::before
          "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5",
          "before:-translate-x-1/2 before:animate-rainbow",
          "before:bg-[linear-gradient(90deg,hsl(0,100%,67%),hsl(45,100%,55%),hsl(130,100%,65%),hsl(210,100%,70%),hsl(300,100%,60%))]",
          "before:[filter:blur(0.8rem)]",
          // light mode bg
          "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,67%),hsl(45,100%,55%),hsl(130,100%,65%),hsl(210,100%,70%),hsl(300,100%,60%))]",
          // dark mode bg
          "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,67%),hsl(45,100%,55%),hsl(130,100%,65%),hsl(210,100%,70%),hsl(300,100%,60%))]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

RainbowButton.displayName = "RainbowButton";
