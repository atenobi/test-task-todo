import React, { useState }  from "react";

// components
import ToDoCounter from "./components/ToDoCounter/ToDoCounter";
import ToDoMainMenu from "./components/ToDoMainMenu/ToDoMainMenu";
import ToDoSearchMenu from "./components/ToDoSearchMenu/ToDoSearchMenu";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import ToDoFooter from "./components/ToDoFooter/ToDoFooter";

// style
import './index.css';

function App() {
  const [toDoArr, setToDoArr] = useState([]);
  const [findedItems, setFindedItems] = useState([]);

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
    setFindedItems([]);
    return updatedEl;
  };

  const removeItem = (id) => {
    setToDoArr([...toDoArr.filter((el) => el.id !== id)]);
  };

  return (
    <div className="App">
      <ToDoCounter toDoCount={toDoArr.length} />
      <ToDoMainMenu addToDoToArray={addToDoToArray} />
      <ToDoSearchMenu
        toDoArr={toDoArr}
        setFindedItems={setFindedItems}
      />

      {findedItems.length > 0 && findedItems.map((el) => (
        <div className="searching_result_container">
          <h4 className="searching_result_text">Found</h4>
          <ToDoItem
            key={el.id}
            item={el}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        </div>
      ))
      }

      {toDoArr.length > 0 && toDoArr.map((el) => (
          <ToDoItem
            key={el.id}
            item={el}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        ))
      }
      <ToDoFooter />
    </div>
  );
}

export default App;
