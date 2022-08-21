import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ margin: "2em" }}>
      <RecoilRoot>
        <h1>Recoil-Todo-Tutorial</h1>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
