import { clsx } from 'clsx';
import { forwardRef } from 'react';

const Avatar = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx([
      'h-8 w-8 shrink-0',
      'relative flex',
      'overflow-hidden rounded-full',
      className,
    ])}
    {...props}
  />
));

const AvatarName = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx([
      'bg-slate-200 text-slate-500',
      'h-full w-full rounded-full',
      'flex items-center justify-center',
      className,
    ])}
    {...props}
  />
));

AvatarName.displayName = 'AvatarName';
Avatar.displayName = 'Avatar';

Avatar.Name = AvatarName;

export default Avatar;
