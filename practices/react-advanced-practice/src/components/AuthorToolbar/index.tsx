import { memo, useMemo } from 'react';
import { Box, Flex } from '@radix-ui/themes';
import { SearchIcon } from '@/components/common/Icons';
import { Heading, Input, Button } from '@/components/common';
import { ButtonVariant } from '@/types';

interface SearchAndAddHeaderProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddClick: () => void;
}

const AuthorToolbar = memo(
  ({ searchTerm, onSearchChange, onAddClick }: SearchAndAddHeaderProps) => {
    const memoizedLeftIcon = useMemo(() => <SearchIcon className="cursor-pointer" />, []);

    return (
      <Flex justify="between" align="center" className="mb-7">
        <Heading text="Authors Table" className="dark:text-light" />
        <Flex className="gap-5">
          <Box className="w-96">
            <Input
              name="authorSearch"
              type="search"
              placeholder="Search by name or email..."
              leftIcon={memoizedLeftIcon}
              value={searchTerm}
              onChange={onSearchChange}
              className="dark:placeholder:bg-dark dark:text-light"
            />
          </Box>
          <Button variant={ButtonVariant.Secondary} onClick={onAddClick}>
            Add New Author
          </Button>
        </Flex>
      </Flex>
    );
  },
);

export default AuthorToolbar;
