import { memo } from 'react';

// Import radix ui
import { Flex } from '@radix-ui/themes';

// Import components
import { Avatar, Text } from '@/components/common';

interface ProfileProps {
  fullName: string;
  email: string;
  avatarUrl: string;
}

const Profile = memo(({ fullName, email, avatarUrl }: ProfileProps) => {
  return (
    <Flex className="flex gap-[15px] text-left">
      <Avatar fallback src={avatarUrl} />
      <Flex direction="column">
        <Text weight="bold" className="font-bold leading-base">
          {fullName}
        </Text>
        <Text className="text-gray">{email}</Text>
      </Flex>
    </Flex>
  );
});

export default Profile;
