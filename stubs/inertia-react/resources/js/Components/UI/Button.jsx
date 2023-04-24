import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

import Spinner from './Spinner';

const ButtonStyles = tv({
  base: [
    'font-semibold',
    'focus:outline-none focus:ring-2 focus:ring-opacity-50',
    'transition ease-in-out duration-300',
  ],
  variants: {
    variant: {
      blue: 'bg-blue-600 hover:bg-blue-900 text-white focus:ring-blue-500',
      red: 'bg-red-600 hover:bg-red-900 text-white focus:ring-red-500',
      gray: 'bg-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white focus:ring-slate-300',
      ghost: 'bg-transparent focus:ring-slate-500',
    },
    radius: {
      xs: 'rounded-sm',
      sm: 'rounded',
      md: 'rounded-lg',
      lg: 'rounded-2xl',
      xl: 'rounded-[32px]',
      full: 'rounded-full',
    },
    size: {
      none: 'h-10',
      base: 'h-10 py-2 px-4',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
    },
    uppercase: {
      true: 'uppercase',
    },
    fullWidth: {
      true: 'w-full text-center',
    },
    disabled: {
      true: [
        'opacity-40',
        'cursor-not-allowed pointer-events-none',
        'border-transparent',
      ],
    },
    loading: {
      true: [
        'inline-flex justify-center items-center',
        'opacity-40 cursor-not-allowed pointer-events-none',
      ],
    },
    icon: {
      true: 'inline-flex items-center',
    },
  },
  defaultVariants: {
    variant: 'blue',
    radius: 'md',
    size: 'base',
  },
});

const Button = forwardRef(
  (
    {
      size,
      variant,
      radius,
      uppercase,
      className,
      disabled,
      fullWidth,
      loading,
      children,
      type,
      icon,
      iconPosition = 'end',
      as,
      ...props
    },
    ref
  ) => {
    const Tag = as || 'button';
    return (
      <Tag
        {...props}
        ref={ref}
        type={type}
        disabled={disabled}
        className={ButtonStyles({
          size,
          variant,
          radius,
          disabled,
          loading,
          fullWidth,
          uppercase,
          icon: !!icon,
          class: className,
        })}
      >
        {loading && <Spinner size="xs" className="mr-2" />}
        {icon && iconPosition === 'start' && icon}
        {children}
        {icon && iconPosition === 'end' && icon}
      </Tag>
    );
  }
);

Button.displayName = 'Button';

export default Button;
