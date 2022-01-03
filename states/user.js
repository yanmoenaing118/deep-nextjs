import { atom, selector } from "recoil";

export const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

export const currentUserNameState = selector({
  key: "CurrentUserNameState",
  get: async ({ get }) => {
    const user = await fetch("/api/users");
    console.log(user);
    return user;
  },
});
