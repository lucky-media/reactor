import { useForm } from '@inertiajs/react';
import { useRef } from 'react';
import { toast } from 'sonner';

import { TextInput } from '@/Components/Form';
import { Button, Card, Heading, Text } from '@/Components/UI';

export default function UpdatePasswordForm() {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();

  const { data, setData, errors, put, reset, processing } = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  const updatePassword = e => {
    e.preventDefault();

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        toast.success('Password has been updated');
      },
      onError: errors => {
        if (errors.password) {
          reset('password', 'password_confirmation');
          passwordInput.current.focus();
        }

        if (errors.current_password) {
          reset('current_password');
          currentPasswordInput.current.focus();
        }
      },
    });
  };

  return (
    <Card>
      <Card.Header>
        <Heading size={2}>Update Password</Heading>
        <Text size="sm" color="secondary">
          Ensure your account is using a long, random password to stay secure.
        </Text>
      </Card.Header>
      <Card.Body>
        <form onSubmit={updatePassword} className="space-y-6">
          <TextInput
            type="password"
            id="current_password"
            label="Current Password"
            ref={currentPasswordInput}
            value={data.current_password}
            onChange={e => setData('current_password', e.target.value)}
            error={errors.current_password}
            autoComplete="current-password"
          />

          <TextInput
            type="password"
            id="password"
            label="New Password"
            ref={passwordInput}
            value={data.password}
            onChange={e => setData('password', e.target.value)}
            error={errors.password}
            autoComplete="new-password"
          />

          <TextInput
            type="password"
            id="password_confirmation"
            label="Confirm Password"
            value={data.password_confirmation}
            onChange={e => setData('password_confirmation', e.target.value)}
            error={errors.password_confirmation}
            autoComplete="new-password"
          />

          <Button disabled={processing}>Save</Button>
        </form>
      </Card.Body>
    </Card>
  );
}
