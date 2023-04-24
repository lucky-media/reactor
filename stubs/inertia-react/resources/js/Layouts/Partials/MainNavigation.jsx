import { Link } from '@inertiajs/react';
import { clsx } from 'clsx';

import { ApplicationLogo } from '@/Components/Shared';

const MenuItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-800"
    >
      {children}
    </Link>
  );
};

export default function MainNavigation({ className, ...props }) {
  return (
    <nav
      className={clsx(['flex items-center space-x-4 lg:space-x-6', className])}
      {...props}
    >
      <ApplicationLogo className="h-auto max-h-6 w-full" />
      <MenuItem href="/dashboard">Dashboard</MenuItem>
      <MenuItem href="/customers">Customers</MenuItem>
      <MenuItem href="/products">Products</MenuItem>
      <MenuItem href="/settings">Settings</MenuItem>
    </nav>
  );
}
