import { useRecoilValue } from "recoil";
import { todoListState } from "../state/atoms";
import { filteredTodoListState } from "../state/selectors";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoItemCreator />
      <TodoListFilters />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
      <TodoListStats />
    </>
  );
}
