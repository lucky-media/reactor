import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { toast } from 'sonner';

import { ApplicationLogo } from '@/Components/Shared';

export default function Guest({ children }) {
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
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="w-full max-w-sm px-5 md:px-0">
          <ApplicationLogo className="mb-8 h-auto max-h-8 w-full" />

          {children}
        </div>
      </div>
    </>
  );
}
