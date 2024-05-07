import { create } from 'zustand'

type Store = {
    user: {
        fullName: string;
        title: string;
        avatar: string;
    } | null;
    token: string | null;
    setUser: (user: { fullName: string; title: string, avatar: string }) => void;
    setToken: (token: string) => void;
    logout: () => void;
};

const useStore = create<Store>()((set) => ({
    user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || 'null') : null,
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    setUser: (user) => set({ user }),
    setToken: (token) => set({ token }),
    logout: () => set({
        user: null, token: null
    }),
}));

export default useStore;