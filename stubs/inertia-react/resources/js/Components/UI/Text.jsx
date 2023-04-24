import { tv } from 'tailwind-variants';

const TextStyles = tv({
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    color: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
    },
    tracking: {
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
    },
    weight: {
      100: 'font-thin',
      200: 'font-extralight',
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
      800: 'font-extrabold',
      900: 'font-black',
    },
    upper: {
      true: 'uppercase',
    },
    isLink: {
      true: 'hover:underline text-blue-600',
    },
  },
  defaultVariants: {
    tracking: 'tight',
    color: 'primary',
    size: 'base',
    weight: 500,
  },
});

const Text = ({
  size,
  color,
  weight,
  tracking,
  className,
  children,
  upper,
  as,
  ...props
}) => {
  const Tag = as || 'p';
  return (
    <Tag
      {...props}
      className={TextStyles({
        color,
        size,
        weight,
        tracking,
        upper,
        class: className,
        isLink: !!props.href,
      })}
    >
      {children}
    </Tag>
  );
};

export default Text;
