import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { ChevronRight } from 'lucide-react';
import { forwardRef } from 'react';

const Dropdown = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuSubTrigger = forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={clsx([
        'flex items-center px-2 py-1.5',
        'rounded-sm text-sm',
        'cursor-default select-none outline-none',
        'focus:bg-slate-200 data-[state=open]:bg-slate-200',
        inset && 'pl-8',
        className,
      ])}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
);

const DropdownMenuSubContent = forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={clsx([
      'z-50 min-w-[8rem] overflow-hidden rounded-md',
      'border p-1 shadow-md',
      'data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1',
      'data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
      'animate-in bg-white text-slate-600',
      className,
    ])}
    {...props}
  />
));

const DropdownMenuContent = forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={clsx([
          'z-50 min-w-[8rem] overflow-hidden rounded-md ',
          'animate-in border bg-white p-1 text-slate-600 shadow-md',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        ])}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
);

const DropdownMenuItem = forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={clsx([
      'relative flex items-center',
      'rounded-sm px-2 py-1.5 text-sm',
      'cursor-default select-none outline-none transition-colors',
      'focus:bg-slate-200 focus:text-slate-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    ])}
    {...props}
  />
));

const DropdownMenuLabel = forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={clsx([
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    ])}
    {...props}
  />
));

const DropdownMenuSeparator = forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={clsx(['-mx-1 my-1 h-px bg-slate-200', className])}
    {...props}
  />
));

DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

Dropdown.Content = DropdownMenuContent;
Dropdown.Group = DropdownMenuGroup;
Dropdown.Item = DropdownMenuItem;
Dropdown.Label = DropdownMenuLabel;
Dropdown.Portal = DropdownMenuPortal;
Dropdown.Separator = DropdownMenuSeparator;
Dropdown.Sub = DropdownMenuSub;
Dropdown.SubContent = DropdownMenuSubContent;
Dropdown.SubTrigger = DropdownMenuSubTrigger;
Dropdown.Trigger = DropdownMenuTrigger;

export default Dropdown;
