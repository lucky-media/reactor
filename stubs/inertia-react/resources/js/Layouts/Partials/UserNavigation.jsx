import { Link } from '@inertiajs/react';
import { LogOut, User } from 'lucide-react';

import { Avatar, Button, Dropdown, Text } from '@/Components/UI';
import useCurrentUser from '@/Hooks/useCurrentUser';

export default function UserNavigation() {
  const { name, email, initials } = useCurrentUser();
  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Button
          variant="ghost"
          icon
          size="none"
          className="relative h-8 w-8 rounded-full"
        >
          <Avatar className="h-8 w-8">
            <Avatar.Name>{initials}</Avatar.Name>
          </Avatar>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content className="w-56" align="end" forceMount>
        <Dropdown.Label className="font-normal">
          <div className="flex flex-col space-y-1">
            <Text size="sm">{name}</Text>
            <Text size="xs" className="leading-none text-slate-500">
              {email}
            </Text>
          </div>
        </Dropdown.Label>
        <Dropdown.Separator />
        <Dropdown.Group>
          <Dropdown.Item className="cursor-pointer" asChild>
            <Link href={route('profile.edit')}>
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </Dropdown.Item>
        </Dropdown.Group>
        <Dropdown.Separator />
        <Dropdown.Item className="w-full cursor-pointer" asChild>
          <Link href={route('logout')} as="button" method="post">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
