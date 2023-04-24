import { Head, useForm } from '@inertiajs/react';

import { Button, Card, Heading, Text } from '@/Components/UI';
import Guest from '@/Layouts/Guest';

export default function VerifyEmail({ status }) {
  const { post, processing } = useForm({});

  const submit = e => {
    e.preventDefault();

    post(route('verification.send'));
  };

  return (
    <Guest>
      <Head title="Email Verification" />

      <Text>
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn&apos;t receive the email, we will gladly send you another.
      </Text>

      {status === 'verification-link-sent' && (
        <Text className="mb-4 text-green-600">
          A new verification link has been sent to the email address you
          provided during registration.
        </Text>
      )}

      <form onSubmit={submit}>
        <Card className="mt-4">
          <Card.Header>
            <Heading>Email Verification</Heading>
          </Card.Header>

          <Card.Body className="flex items-center justify-between space-y-2">
            <Button type="submit" fullWidth radius="lg" loading={processing}>
              Resend Verification Email
            </Button>

            <Button
              variant="gray"
              onClick={() => route('logout')}
              fullWidth
              radius="lg"
            >
              Logout
            </Button>
          </Card.Body>
        </Card>
      </form>
    </Guest>
  );
}
