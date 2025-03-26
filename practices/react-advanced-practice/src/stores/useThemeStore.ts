import { create } from 'zustand';

import { persist } from 'zustand/middleware';

// Import types
import { ThemeMode } from '@/types';

interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: ThemeMode.Light,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light,
        })),
    }),
    {
      name: 'theme-preference',
    },
  ),
);
