import { useEffect, useCallback } from 'react';

// Import common icons
import { MoonIcon, SunIcon } from '@/components/common/Icons';

// Import common components
import { Button } from '@/components/common';

// Import types
import { ButtonVariant, ThemeMode } from '@/types';

// Import store
import { useThemeStore } from '@/stores';

const SwitchTheme = () => {
  const { theme, setTheme } = useThemeStore();

  // Update theme when it changes
  useEffect(() => {
    document.documentElement.classList.toggle(ThemeMode.Dark, theme === ThemeMode.Dark);
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme(theme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
  }, [theme, setTheme]);

  return (
    <Button
      variant={ButtonVariant.Transparent}
      onClick={handleToggleTheme}
      className="p-2 rounded-full bg-primary text-white"
      ariaLabel="Button switch theme"
    >
      {theme === ThemeMode.Light ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default SwitchTheme;
