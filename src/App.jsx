import React, { useState }  from "react";
import './App.css';

// components
import ToDoMainMenu from "./components/ToDoMainMenu/ToDoMainMenu";
import ToDoItem from "./components/ToDoItem/ToDoItem";

function App() {
  const [toDoArr, setToDoArr] = useState([]);

  const addToDoToArray = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        value: userInput,
      }
      setToDoArr([...toDoArr, newItem]);
    }
  };

  const removeItem = (id) => {
    setToDoArr([...toDoArr.filter((el) => el.id !== id)]);
  };

  const apdateItem = (id) => {
   setToDoArr([...toDoArr.filter((el) => {
     if (el.id === id) {
       return el.value = 'updated';
     }
   })])
  }

  return (
    <div className="App">
      <p>Заметок: {toDoArr.length}</p>
      <ToDoMainMenu addToDoToArray={addToDoToArray} />
      {toDoArr.length > 0 && toDoArr.map((el) => (
          <ToDoItem
            key={el.id}
            item={el}
            removeItem={removeItem}
          />
        ))
      }
    </div>
  );
}

export default App;
