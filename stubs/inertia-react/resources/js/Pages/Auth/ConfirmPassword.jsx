import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

import { TextInput } from '@/Components/Form';
import { Button, Card, Heading, Text } from '@/Components/UI';
import Guest from '@/Layouts/Guest';

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = e => {
    e.preventDefault();

    post(route('password.confirm'));
  };

  return (
    <Guest>
      <Head title="Confirm Password" />

      <Text className="mb-4">
        This is a secure area of the application. Please confirm your password
        before continuing.
      </Text>

      <form onSubmit={submit}>
        <Card>
          <Card.Header>
            <Heading>Confirm Password</Heading>
          </Card.Header>
          <Card.Body>
            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              onChange={e => setData('password', e.target.value)}
              error={errors.password}
              autoFocus
            />

            <Button
              type="submit"
              className="mt-6"
              radius="lg"
              fullWidth
              loading={processing}
            >
              Confirm
            </Button>
          </Card.Body>
        </Card>
      </form>
    </Guest>
  );
}
