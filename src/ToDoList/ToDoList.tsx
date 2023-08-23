import React, { ChangeEvent, FC, useState } from "react";

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
  const [editId, setEditId] = useState<number | null>(null);

  const [editedText, setEditedText] = useState<string>("");

  const handleDelete = (id: number): void => {
    const newToDos = toDos.filter((item) => item.id !== id);
    setToDo(newToDos);
  };

  console.log(toDos);

  const handleComplete = (id: number): void => {
    const complete = toDos.map((item) => {
      return item.id === id ? { ...item, isCompleted: true } : item;
    });
    setToDo(complete);
  };

  const handleEdit = (id: number, newtItem: string) => {
    setEditId(id);
    setEditedText(newtItem);
  };

  const handleSave = () => {
    const updatedItems = toDos.map((item) =>
      item.id === editId ? { ...item, items: editedText } : item
    );
    setToDo(updatedItems);
    setEditId(null);
  };
console.log(editId)
  return (
    <div>
      {toDos.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.items}</p>
            {editId && (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEditedText(e.target.value)
                  }
                />
                <button onClick={handleSave}>Save</button>
              </>
            )}

            <button onClick={() => handleEdit(item.id, item.items)}>
              Edit
            </button>

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
