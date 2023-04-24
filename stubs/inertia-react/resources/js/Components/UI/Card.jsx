import { clsx } from 'clsx';
import { forwardRef } from 'react';

const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx([
      'rounded-2xl border border-slate-300 bg-white shadow-sm',
      className,
    ])}
    {...props}
  />
));

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(['flex flex-col space-y-1.5 p-6', className])}
    {...props}
  />
));

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx([
      'text-lg font-semibold leading-none tracking-tight',
      className,
    ])}
    {...props}
  />
));

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx(['text-sm text-gray-600', className])}
    {...props}
  />
));

const CardBody = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(['p-6 pt-0', className])} {...props} />
));

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(['flex items-center p-6 pt-0', className])}
    {...props}
  />
));

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
