import { Link, useForm } from '@inertiajs/react';
import { toast } from 'sonner';

import { TextInput } from '@/Components/Form';
import { Button, Card, Heading, Text } from '@/Components/UI';
import useCurrentUser from '@/Hooks/useCurrentUser';

export default function UpdateProfileInformation({ mustVerifyEmail, status }) {
  const { name, email, email_verified_at } = useCurrentUser();

  const { data, setData, patch, errors, processing } = useForm({
    name,
    email,
  });

  const submit = e => {
    e.preventDefault();

    patch(route('profile.update'), {
      onSuccess: () => {
        toast.success('Profile Information has been updated');
      },
    });
  };

  return (
    <Card>
      <Card.Header>
        <Heading size={2}>Profile Information</Heading>
        <Text size="sm" color="secondary">
          Update your account&apos;s profile information and email address.
        </Text>
      </Card.Header>
      <Card.Body>
        <form onSubmit={submit} className="space-y-6">
          <TextInput
            id="name"
            label="Name"
            value={data.name}
            onChange={e => setData('name', e.target.value)}
            error={errors.name}
            required
            autoFocus
            autoComplete="name"
          />

          <TextInput
            id="email"
            label="Email"
            type="email"
            value={data.email}
            onChange={e => setData('email', e.target.value)}
            error={errors.email}
            required
            autoComplete="email"
          />

          {mustVerifyEmail && email_verified_at === null && (
            <>
              <div className="mt-2 flex flex-wrap">
                <Text>Your email address is unverified.</Text>

                <Link
                  href={route('verification.send')}
                  as="button"
                  method="post"
                  className="ml-1 text-blue-600 underline"
                >
                  Re-send the verification email.
                </Link>
              </div>

              {status === 'verification-link-sent' && (
                <Text className="mt-2 text-green-600">
                  A new verification link has been sent to your email address.
                </Text>
              )}
            </>
          )}

          <Button disabled={processing}>Save</Button>
        </form>
      </Card.Body>
    </Card>
  );
}
