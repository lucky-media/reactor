import { Head } from '@inertiajs/react';

import Authenticated from '@/Layouts/Authenticated';

export default function Dashboard() {
  return (
    <Authenticated title="Dashboard">
      <Head title="Dashboard" />

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">You're logged in!</div>
    </Authenticated>
  );
}
