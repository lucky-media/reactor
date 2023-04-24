import { Head, useForm } from '@inertiajs/react';

import { TextInput } from '@/Components/Form';
import { Button, Card, Heading, Text } from '@/Components/UI';
import Guest from '@/Layouts/Guest';

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('password.email'));
  };

  return (
    <Guest>
      <Head title="Forgot Password" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
          {status}
        </div>
      )}

      <form onSubmit={submit}>
        <Card>
          <Card.Header>
            <Heading>Forgot your password? </Heading>
            <Text size="sm" color="secondary">
              No problem. Just let us know your email address and we will email
              you a password reset link that will allow you to choose a new one.
            </Text>
          </Card.Header>
          <Card.Body>
            <TextInput
              id="email"
              label="Email"
              autoComplete="email"
              value={data.email}
              onChange={e => setData('email', e.target.value)}
              placeholder="you@reactor.dev"
              error={errors.email}
              required
            />
            <Button
              type="submit"
              className="mt-6"
              radius="lg"
              fullWidth
              loading={processing}
            >
              Send Password Reset Link
            </Button>
          </Card.Body>
        </Card>
      </form>
    </Guest>
  );
}
