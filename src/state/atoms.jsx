import { atom, useRecoilValue } from "recoil";

/*
const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 0,
      text: "hogehoge",
      isComplete: false,
    },
    ...
  ],
})
*/

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
