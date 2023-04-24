import { Head } from '@inertiajs/react';

import Authenticated from '@/Layouts/Authenticated';

import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
  return (
    <Authenticated title="Profile">
      <Head title="Profile" />

      <div>
        <div className="max-w-3xl space-y-6 sm:px-6 lg:px-8">
          <UpdateProfileInformationForm
            mustVerifyEmail={mustVerifyEmail}
            status={status}
          />

          <UpdatePasswordForm className="max-w-xl" />

          <DeleteUserForm className="max-w-xl" />
        </div>
      </div>
    </Authenticated>
  );
}
