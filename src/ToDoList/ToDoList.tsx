import React, { FC } from "react";

interface ToDoItem {
  id: number;
  items: string;
  isCompleted: boolean;
}

interface ToDoListProps {
  toDos: ToDoItem[];
  setToDo: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

const ToDoList: FC<ToDoListProps> = ({ toDos, setToDo }) => {

  const handleDelete = (id: number): void => {
    const newToDos = toDos.filter((item) => item.id !== id);
    setToDo(newToDos);
  };

  console.log(toDos);

  const handleComplete = (id: number):void => {
    const complete = toDos.map((item) => {
      return item.id === id?{...item,isCompleted:true}:item
    });
    setToDo(complete)
  };

  return (
    <div>
      {toDos.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.items}</p>
            <button onClick={() => handleComplete(item.id)}>
              Mark as Completed
            </button>
            <button onClick={() => handleDelete(item.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
