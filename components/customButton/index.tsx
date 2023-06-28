"use client"
import Image from 'next/image'
import { MouseEventHandler } from 'react';

type Props = {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean
}

const CustomButton = ({title, containerStyles, 
  handleClick, btnType, textStyles, 
  rightIcon, isDisabled}: Props) => {

  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
    <span className={`flex-1 ${textStyles}`}>
        {title}
    </span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image 
          src={rightIcon}
          alt="right icon"
          fill
          className="object-contain"
        />
      </div>
    )}
    </button>
  )
}

export default CustomButton