import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../state/atoms";

const removeItemAtIndex = (arr, index) => {
  return arr.filter((item) => item.id !== index);
};

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e) => {
    const newList = todoList.map((listItem) => {
      if (listItem.id === index) {
        return {
          ...listItem,
          text: e.target.value,
        };
      } else {
        return listItem;
      }
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = todoList.map((listItem) => {
      if (listItem.id === index) {
        return {
          ...listItem,
          isComplete: !item.isComplete,
        };
      } else {
        return listItem;
      }
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
