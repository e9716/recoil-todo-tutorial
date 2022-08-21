import { useRecoilState } from "recoil";
import { todoListFilterState } from "../state/atoms";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Show Completed</option>
        <option value="Show Uncompleted">Show Uncompleted</option>
      </select>
    </>
  );
};
