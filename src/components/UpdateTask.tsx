import React, { useEffect, useState } from "react";
import type { Task } from "../Types/types";

interface UpdateTaskProps {
  task: Task;
  onUpdateTask: (task: Task) => void;
  onCancel: () => void;
}

const UpdateTask: React.FC<UpdateTaskProps> = ({
  task,
  onUpdateTask,
  onCancel,
}) => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  // pre-fill form
  useEffect(() => {
    if (task) {
      setData({
        title: task.title,
        description: task.description,
      });
    }
  }, [task]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!data.title || !data.description) return;

    onUpdateTask({
      ...task,
      ...data,
    });
  };

  return (
    <div className="bg-white p-4 mt-4 rounded shadow max-w-md">
      <h2 className="font-semibold mb-2">Edit Task</h2>

      <input
        name="title"
        value={data.title}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <input
        name="description"
        value={data.description}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-3 py-1"
        >
          Update
        </button>

        <button
          onClick={onCancel}
          className="bg-gray-400 text-white px-3 py-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateTask;