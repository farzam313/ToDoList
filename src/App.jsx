import Todo from "./components/Todo";
import { AppDataProvider } from "./components/NewContext";

function App() {
  return (
    <>
      <AppDataProvider>
        <Todo />
      </AppDataProvider>
    </>
  );
}

export default App;
