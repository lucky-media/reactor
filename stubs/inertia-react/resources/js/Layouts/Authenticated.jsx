import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { toast } from 'sonner';

import { Heading } from '@/Components/UI';

import MainNavigation from './Partials/MainNavigation';
import UserNavigation from './Partials/UserNavigation';

export default function Authenticated({ children, title }) {
  const { errors } = usePage().props;

  useEffect(() => {
    if (Object.keys(errors).length === 0 && errors.constructor === Object)
      return;

    Object.entries(errors).forEach(([, value]) => {
      toast.error(value);
    });
  }, [errors]);

  return (
    <>
      <Toaster position="top-right" richColors closeButton expand={true} />
      <div className="hidden flex-col md:flex">
        <div className="border-b border-slate-300">
          <div className="flex h-16 items-center px-4">
            <MainNavigation />
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search /> */}
              <UserNavigation />
            </div>
          </div>
        </div>
        {title && (
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <Heading size="h2">{title}</Heading>
            </div>
          </div>
        )}

        {children}
      </div>
    </>
  );
}
