import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

import { TextInput } from '@/Components/Form';
import { Button, Card, Dialog, Heading, Text } from '@/Components/UI';

export default function DeleteUserForm() {
  const passwordInput = useRef();

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: '',
  });

  const deleteUser = e => {
    e.preventDefault();

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset(),
    });
  };

  return (
    <Card>
      <Card.Header>
        <Heading size={2}>Delete Account</Heading>
        <Text size="sm" color="secondary">
          Once your account is deleted, all of its resources and data will be
          permanently deleted. <br /> Before deleting your account, please
          download any data or information that you wish to retain.
        </Text>
      </Card.Header>
      <Card.Body>
        <Dialog>
          <Dialog.Trigger asChild>
            <Button variant="red">Delete Account</Button>
          </Dialog.Trigger>
          <Dialog.Content className="sm:max-w-[425px]">
            <Dialog.Header>
              <Dialog.Title>
                Are you sure you want to delete your account?
              </Dialog.Title>
              <Dialog.Description>
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Please enter your password to confirm
                you wouldlike to permanently delete your account.
              </Dialog.Description>
            </Dialog.Header>

            <form onSubmit={deleteUser}>
              <TextInput
                id="password"
                label="Password"
                type="password"
                ref={passwordInput}
                value={data.password}
                onChange={e => setData('password', e.target.value)}
                autoFocus
                placeholder="Password"
                error={errors.password}
              />

              <div className="mt-6 flex justify-end">
                <Dialog.Close asChild>
                  <Button variant="gray">Cancel</Button>
                </Dialog.Close>

                <Button variant="red" className="ml-3" disabled={processing}>
                  Delete Account
                </Button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog>
      </Card.Body>
    </Card>
  );
}
