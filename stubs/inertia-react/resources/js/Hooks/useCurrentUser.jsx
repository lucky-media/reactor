import { usePage } from '@inertiajs/react';

import User from '@/Models/User';

export default function useCurrentUser() {
  return new User(usePage().props.auth.user);
}
