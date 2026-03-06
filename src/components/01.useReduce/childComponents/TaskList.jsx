import { useState } from "react";

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="task-content">
        <input type="checkbox" checked={task.done} />

        {isEditing ? (
          <input className="task-edit-text" value={task.text} />
        ) : (
          <span className="task-text">{task.text}</span>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? <button>Save</button> : <button>Edit</button>}

        <button>Delete</button>
      </div>
    </>
  );
}
