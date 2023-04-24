import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

import Label from './Label';

const CheckStyles = tv({
  base: [
    'peer shrink-0 rounded bg-white',
    'border border-slate-300',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2',
  ],
  variants: {
    size: {
      xs: 'w-4 h-4',
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
    },
    hasError: {
      true: 'border-red-800',
    },
    checked: {
      true: 'bg-blue-600 text-white',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

const IconStyles = tv({
  base: 'text-white',
  variants: {
    size: {
      xs: 'h-3.5 w-3.5',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

const Checkbox = forwardRef(({ className, size, error, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={CheckStyles({
      size,
      hasError: error !== undefined,
      checked: props.checked,
      class: className,
    })}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
      <Check className={IconStyles({ size })} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

const Group = ({ children }) => (
  <div className="flex items-center space-x-2">{children}</div>
);

Checkbox.Group = Group;
Checkbox.Label = Label;
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
