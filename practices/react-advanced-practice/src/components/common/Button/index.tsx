import { memo } from 'react';

// Import radix ui
import { Button as ButtonBase } from '@radix-ui/themes';

// Import types
import { ButtonVariant } from '@/types';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick: () => void;
}

const Button = memo(
  ({
    children,
    variant = ButtonVariant.Primary,
    isDisabled = false,
    className = '',
    onClick,
    ariaLabel = 'Button',
  }: ButtonProps) => {
    const baseClass = `px-[22px] py-2.5 font-bold rounded-xl ${
      isDisabled ? 'primary opacity-50 cursor-not-allowed' : `${variant} cursor-pointer`
    }`;

    return (
      <ButtonBase
        className={`${baseClass} ${className}`}
        aria-label={ariaLabel}
        onClick={onClick}
        disabled={isDisabled}
      >
        {children}
      </ButtonBase>
    );
  },
);

export default Button;
