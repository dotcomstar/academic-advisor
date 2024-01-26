import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface DialogStore {
  isSettingsOpen: boolean;
  setSettingsOpen: (b: boolean) => void;
}

const useDialogStore = create<DialogStore>((set) => ({
  isSettingsOpen: false,
  setSettingsOpen: (b: boolean) => set(() => ({ isSettingsOpen: b })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Dialog Store", useDialogStore);

export default useDialogStore;
