import { selector } from "recoil";
import { todoListState, todoListFilterState } from "./atoms";

export const filteredTodoListState = selector({
  key: "filterdTodoListState",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoListFilterState);
    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : Math.round((totalCompletedNum / totalNum) * 100);

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
