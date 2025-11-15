import { create } from "zustand";

interface AppState {
  notifications: string[];
  addNotification: (msg: string) => void;
  clearNotifications: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  notifications: [],
  addNotification: (msg) =>
    set((state) => ({
      notifications: [...state.notifications, msg],
    })),
  clearNotifications: () => set({ notifications: [] }),
}));
