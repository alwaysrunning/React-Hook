import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { isDev } from '@/configs';

type Theme = 'dark' | 'light';

interface AppStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useAppStore = create<AppStore>()(
  devtools(
    immer((set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
    })),
    {
      enabled: isDev,
    }
  )
);
