import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

import { TextInput } from '@/Components/Form';
import { Button, Card, Heading } from '@/Components/UI';
import Guest from '@/Layouts/Guest';

export default function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = e => {
    e.preventDefault();

    post(route('password.store'));
  };

  return (
    <Guest>
      <Head title="Reset Password" />

      <form onSubmit={submit}>
        <Card>
          <Card.Header>
            <Heading>Reset Password</Heading>
          </Card.Header>
          <Card.Body>
            <div className="space-y-4">
              <TextInput
                id="email"
                label="Email"
                autoComplete="email"
                onChange={e => setData('email', e.target.value)}
                placeholder="you@reactor.dev"
                error={errors.email}
                value={data.email}
                required
              />
              <TextInput
                id="password"
                type="password"
                label="Password"
                autoComplete="current-password"
                onChange={e => setData('password', e.target.value)}
                placeholder="Your password"
                error={errors.password}
                required
                autoFocus
              />

              <TextInput
                id="password_confirmation"
                type="password"
                label="Confirm Password"
                onChange={e => setData('password_confirmation', e.target.value)}
                placeholder="Confirm Password"
                error={errors.password_confirmation}
                required
              />
            </div>

            <Button
              type="submit"
              className="mt-6"
              radius="lg"
              fullWidth
              loading={processing}
            >
              Register
            </Button>
          </Card.Body>
        </Card>
      </form>
    </Guest>
  );
}
