import { tv } from 'tailwind-variants';

const HeadingStyles = tv({
  base: 'font-bold',
  variants: {
    size: {
      1: 'text-3xl leading-[1.3]',
      2: 'text-2xl leading-[1.35]',
      3: 'text-xl leading-[1.4]',
      4: 'text-lg leading-[1.45]',
      5: 'text-base leading-[1.5]',
      6: 'text-sm leading-[1.5]',
    },
    color: {
      gray: 'text-gray-900',
      blue: 'text-blue-800',
      red: 'text-red-800',
    },
  },
  defaultVariants: {
    color: 'gray',
    size: 1,
  },
});

const Heading = ({ size, color, className, children, as, ...props }) => {
  const Tag = as || 'h1';

  return (
    <Tag
      {...props}
      className={HeadingStyles({ size, color, class: className })}
    >
      {children}
    </Tag>
  );
};

export default Heading;
