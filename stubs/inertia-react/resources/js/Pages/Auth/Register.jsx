import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

import { TextInput } from '@/Components/Form';
import { Button, Card, Heading, Text } from '@/Components/UI';
import Guest from '@/Layouts/Guest';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
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

    post(route('register'));
  };

  return (
    <Guest>
      <Head title="Register" />

      <form onSubmit={submit}>
        <Card>
          <Card.Header>
            <Heading>Register</Heading>
            <Text size="sm" color="secondary">
              Already have an account?{' '}
              <Text as={Link} size="sm" href={route('login')}>
                Login
              </Text>
            </Text>
          </Card.Header>
          <Card.Body>
            <div className="space-y-4">
              <TextInput
                id="name"
                label="Name"
                onChange={e => setData('name', e.target.value)}
                placeholder="Your name"
                error={errors.name}
                value={data.name}
                required
              />

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
