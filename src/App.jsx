import React, { useState }  from "react";
import './App.css';

// components
import ToDoCounter from "./components/ToDoCounter/ToDoCounter";
import ToDoMainMenu from "./components/ToDoMainMenu/ToDoMainMenu";
import ToDoItem from "./components/ToDoItem/ToDoItem";

function App() {
  const [toDoArr, setToDoArr] = useState([]);

  const addToDoToArray = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        value: userInput,
        change: function (value) {
          this.value = value;
        }
      }
      setToDoArr([...toDoArr, newItem]);
    }
  };

  const updateItem = (toDo, newValue) => {
    const updatedEl = toDoArr.find(el => el.id === toDo.id)
    updatedEl.change(newValue);
    return updatedEl;
  };

  const removeItem = (id) => {
    setToDoArr([...toDoArr.filter((el) => el.id !== id)]);
  };


  return (
    <div className="App">
      <ToDoCounter toDoCount={toDoArr.length} />
      <ToDoMainMenu addToDoToArray={addToDoToArray} />
      {toDoArr.length > 0 && toDoArr.map((el) => (
          <ToDoItem
            key={el.id}
            item={el}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        ))
      }
    </div>
  );
}

export default App;
