import { memo, useMemo, ReactElement } from 'react';

// Import radix
import { Box, Flex } from '@radix-ui/themes';

// Import components common
import { Logo } from '@/components/common';

// Import constants
import { SIDEBAR_ITEMS } from '@/constants';

// Import sidebar item
import SidebarItem from './SidebarItem';

// Import help box
import HelpBox from './HelpBox';

// Import zustand store
import { useThemeStore } from '@/stores';

// Import types
import { ThemeMode } from '@/types';

interface SidebarItemType {
  icon: ReactElement;
  label: string;
  active: boolean;
  href: string;
  group?: string;
}

const Sidebar = () => {
  const { theme } = useThemeStore();

  const mainItems: SidebarItemType[] = useMemo(
    () => SIDEBAR_ITEMS.filter((item) => !item.group),
    [],
  );

  const accountItems: SidebarItemType[] = useMemo(
    () => SIDEBAR_ITEMS.filter((item) => item.group === 'ACCOUNT PAGES'),
    [],
  );

  // Function renderSidebarItems
  const renderSidebarItems = (items: SidebarItemType[]) =>
    items.map((item) => (
      <SidebarItem
        key={item.label}
        icon={item.icon}
        label={item.label}
        href={item.href}
        active={item.active}
      />
    ));

  return (
    <Box>
      <Flex
        justify="center"
        align="center"
        className="mb-[22px] gap-12 gradient-border pb-7"
      >
        <Logo color={theme === ThemeMode.Dark ? 'secondary' : 'primary'} href="/home" />
      </Flex>
      <ul className="px-[30px]">
        {renderSidebarItems(mainItems)}
        <li className="font-bold py-6 px-4 dark:text-light">ACCOUNT PAGES</li>
        {renderSidebarItems(accountItems)}
      </ul>
      <HelpBox />
    </Box>
  );
};

export default memo(Sidebar);
