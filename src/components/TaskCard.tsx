import React from "react";
import type { Task } from "../Types/types";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number | string) => void;
  onComplete: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
  onComplete,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow mb-3 bg-white">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>

      <p className="text-sm text-gray-500">
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <div className="mt-2 flex gap-2">
        <button
          type="button"
          className="bg-yellow-400 px-2 py-1 rounded"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          type="button"
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

        <button
          type="button"
          className="bg-green-500 text-white px-2 py-1 rounded"
          onClick={() => onComplete(task)}
          disabled={task.completed}
        >
          {task.completed ? "Completed" : "Complete"}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;