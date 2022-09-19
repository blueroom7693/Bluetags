import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const isLogined = atom({
  key: "isLogined",
  default: false,
});

export const isShow = atom({
  key: "isShow",
  default: false,
});

export const isSelected = atom({
  key: "isSelected",
  default: "",
});

export const isFilterShow = atom({
  key: "isFilter",
  default: false,
});

export const chainString = atom({
  key: "chainString",
  default: "",
});

export const projectString = atom({
  key: "projectString",
  default: "",
});

export const snstString = atom({
  key: "snstString",
  default: "",
});

export const todayString = atom({
  key: "today",
  default: new Date(),
});

export const pastString = atom({
  key: "past",
  default: new Date(),
});

export const subscirbeProject = atom<string[]>({
  key: "subscirbeProject",
  default: [],
});
