'use client';

import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface Props {
  btnType?: 'submit' | 'button';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  rightIcon?: string;
  styles?: string;
  textStyles?: string;
  title: string;
}

const Button = ({
  btnType,
  handleClick,
  isDisabled,
  rightIcon,
  styles,
  textStyles,
  title,
}: Props) => {
  return (
    <button
      disabled={isDisabled || false}
      type={btnType || 'button'}
      className={`custom-btn ${styles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <Image src={rightIcon} alt="arrow" fill className="object-contain" />
      )}
    </button>
  );
};

export default Button;
