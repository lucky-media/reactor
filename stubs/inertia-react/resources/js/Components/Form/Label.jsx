import * as LabelPrimitive from '@radix-ui/react-label';
import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

const labelVariants = tv({
  base: [
    'text-sm font-medium leading-none',
    'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  ],
});

const Label = forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={labelVariants({ class: className })}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
