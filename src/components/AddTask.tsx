import React, { useState } from "react";
import type { TaskProps } from "../Types/types";

const AddTask: React.FC<TaskProps> = ({ onAddTask }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ FIXED (no event, no preventDefault)
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!data.title || !data.description) return;

  const newTask = {
    id: Date.now().toString(),
    title: data.title,
    description: data.description,
    completed: data.completed,
  };

  onAddTask(newTask);
};

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Add New Task
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={data.title}
        onChange={handleChange}
        className="w-full border p-2 mb-3"
      />

      <input
        type="text"
        name="description"
        placeholder="Task description"
        value={data.description}
        onChange={handleChange}
        className="w-full border p-2 mb-4"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;