import React, { ChangeEvent, FC, useState } from "react";
import ToDoList from "../ToDoList/ToDoList";

interface toDoItem {
  id: number;
  items: string;
  isCompleted: boolean;
}

const ToDo: FC = () => {
  const [toDo, setToDo] = useState<toDoItem[]>([]);
  const [text, setText] = useState<string>("");

  const handleClick = ():void => {
    if (text.trim() === "") return alert("Enter a ToDo");
    setToDo([...toDo, { id: Date.now(), items: text, isCompleted: false }]);
    setText("");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter a text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          value={text}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div style={{ display:"flex",justifyContent:"center" }}>
        {toDo.length === 0 ? (
          <h2>Enter a ToDo</h2>
        ) : (
         <ToDoList toDos={toDo} setToDo={setToDo}/>
        )}
      </div>
    </div>
  );
};

export default ToDo;
