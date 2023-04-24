import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

import { Label } from './';

const InputStyles = tv({
  base: [
    'flex h-10 w-full px-3 py-2 text-sm',
    'border border-slate-300 bg-transparent',
    'ring-offset-white focus:ring-slate-300 focus:border-slate-300',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-slate-300 focus-visible:ring-offset-2',
    'placeholder:text-slate-400',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
  ],
  variants: {
    radius: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },
    hasError: {
      true: 'text-red-500 border-red-500',
    },
  },
  defaultVariants: {
    radius: 'xl',
  },
});

const TextInput = forwardRef(
  ({ label, type = 'text', id, error, className, ...props }, ref) => {
    return (
      <div className={clsx(['flex w-full  flex-col', className])}>
        {label && (
          <Label className="mb-2" htmlFor={id}>
            {label} {props?.required && <span className="text-red-500">*</span>}
          </Label>
        )}
        <input
          id={id}
          ref={ref}
          type={type}
          className={InputStyles({
            hasError: error !== undefined,
          })}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-left text-xs text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

TextInput.displayName = TextInput;

export default TextInput;
