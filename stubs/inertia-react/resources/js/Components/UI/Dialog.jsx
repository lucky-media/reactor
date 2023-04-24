import * as DialogPrimitive from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import { X } from 'lucide-react';
import * as React from 'react';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ className, children, ...props }) => (
  <DialogPrimitive.Portal className={clsx(className)} {...props}>
    <div
      className={clsx([
        'fixed inset-0 z-50',
        'flex items-start justify-center sm:items-center',
      ])}
    >
      {children}
    </div>
  </DialogPrimitive.Portal>
);

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={clsx([
      'fixed inset-0 z-50',
      'bg-white/80 backdrop-blur-sm',
      'data-[state=open]:fade-in',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out',
      'transition-all duration-100',
      className,
    ])}
    {...props}
  />
));

const DialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={clsx([
          'fixed z-50 w-full sm:max-w-lg',
          'bg-white p-6 shadow-lg sm:rounded-lg',
          'grid gap-4 rounded-b-lg border border-slate-300',
          'animate-in sm:zoom-in-90',
          'data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10',
          'data-[state=open]:sm:slide-in-from-bottom-0',
          className,
        ])}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className={clsx([
            'absolute right-4 top-4 rounded-sm',
            'opacity-70 ring-offset-white hover:opacity-100',
            'data-[state=open]:bg-blue-600 data-[state=open]:text-white',
            'focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2',
            'transition-opacity disabled:pointer-events-none',
          ])}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);

const DialogHeader = ({ className, ...props }) => (
  <div
    className={clsx([
      'flex flex-col space-y-1.5',
      'text-center sm:text-left',
      className,
    ])}
    {...props}
  />
);

const DialogFooter = ({ className, ...props }) => (
  <div
    className={clsx([
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    ])}
    {...props}
  />
);

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={clsx([
      'text-lg font-semibold leading-none tracking-tight',
      className,
    ])}
    {...props}
  />
));

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={clsx('text-sm text-slate-500', className)}
    {...props}
  />
));

DialogHeader.displayName = 'DialogHeader';
DialogTitle.displayName = DialogPrimitive.Title.displayName;
DialogDescription.displayName = DialogPrimitive.Description.displayName;
DialogContent.displayName = DialogPrimitive.Content.displayName;
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
DialogFooter.displayName = 'DialogFooter';
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Content = DialogContent;
Dialog.Overlay = DialogOverlay;
Dialog.Footer = DialogFooter;
Dialog.Portal = DialogPortal;
Dialog.Trigger = DialogTrigger;
Dialog.Close = DialogPrimitive.Close;

export default Dialog;
