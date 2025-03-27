import { memo, useEffect } from 'react';

// Import common icons
import { MoonIcon, SunIcon } from '@/components/common/Icons';

// Import common components
import { Button } from '@/components/common';

// Import types
import { ButtonVariant, ThemeMode } from '@/types';

// Import store
import { useThemeStore } from '@/stores';

const SwitchTheme = memo(() => {
  const { theme, toggleTheme } = useThemeStore();

  // Update theme when it changes
  useEffect(() => {
    document.documentElement.classList.toggle(ThemeMode.Dark, theme === ThemeMode.Dark);
  }, [theme]);

  return (
    <Button
      variant={ButtonVariant.Transparent}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary text-white"
      ariaLabel="Button switch theme"
    >
      {theme === ThemeMode.Light ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
});

export default SwitchTheme;
