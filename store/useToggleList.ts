import create from "zustand";

interface ListView {
  listView: boolean;
  toggle: () => void;
}

const useToggleList = create<ListView>((set) => ({
  listView: false,
  toggle: () => set((state) => ({ listView: !state.listView })),
}));

export default useToggleList;
