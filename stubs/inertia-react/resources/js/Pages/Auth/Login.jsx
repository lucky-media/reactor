import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

import { Checkbox, TextInput } from '@/Components/Form';
import { Button, Card, Heading, Text } from '@/Components/UI';
import Guest from '@/Layouts/Guest';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = e => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <Guest>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <Card>
          <Card.Header>
            <Heading>Welcome back!</Heading>
            <Text size="sm" color="secondary">
              Do not have an account yet?{' '}
              <Text as={Link} size="sm" href={route('register')}>
                Create account
              </Text>
            </Text>
          </Card.Header>
          <Card.Body>
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
              type="password"
              label="Password"
              autoComplete="current-password"
              onChange={e => setData('password', e.target.value)}
              placeholder="Your password"
              error={errors.password}
              required
              className="mt-4"
            />
            <div className="mt-4 flex justify-between">
              <Checkbox.Group>
                <Checkbox
                  id="remember"
                  checked={data.remember}
                  onCheckedChange={e => setData('remember', e)}
                />
                <Checkbox.Label htmlFor="remember">Remember me</Checkbox.Label>
              </Checkbox.Group>

              {canResetPassword && (
                <Text as={Link} size="sm" href={route('password.request')}>
                  Forgot password?
                </Text>
              )}
            </div>
            <Button
              type="submit"
              className="mt-6"
              radius="lg"
              fullWidth
              loading={processing}
            >
              Sign in
            </Button>
          </Card.Body>
        </Card>
      </form>
    </Guest>
  );
}
