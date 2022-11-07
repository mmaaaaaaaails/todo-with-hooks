import './App.css';
import TodoForm from "./TodoForm";
import {Typography} from "@mui/material";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";

const App = () => {

    const {todos, addTodo, deleteTodo} = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm
        saveTodo={todoText => {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
                addTodo(trimmedText)
            }
        }}
      />
        <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
        />
    </div>
  );
}

export default App;
