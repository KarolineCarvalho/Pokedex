import create from "zustand";

/* const [listView, setListVIew] = useState<boolean>(false);
  const toggleState = () => setListVIew((listView) => !listView); */

interface ListView {
  listView: boolean;
  toggle: () => void;
}

const useToggleList = create<ListView>((set) => ({
  listView: false,
  toggle: () => set((state) => ({ listView: !state.listView })),
}));

export default useToggleList;
