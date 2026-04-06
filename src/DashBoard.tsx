// import React from 'react'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import type {Task} from './Types/types';
import { getApiServices } from './apiServices/apiServices';
import { useEffect, useState } from 'react';

const DashBoard = () => {
    const navigate = useNavigate();
    const  [tasks , setTasks] = useState<Task[]>([]);
    const [editTask, setEditTask] = useState<Task | null>(null);
    const [showForm , setShowForm] = useState(false);
    const onAddTask = async (task : Task ) =>
    {
      try{
        const res = await getApiServices.post("/tasks", task);
        console.log(res);
         setTasks((prev) => [...prev , res]);
         setShowForm(false);

      }catch(err)
      {
        console.error("Error adding task:", err);
      }
     
    }
    const fetchTasks = async () => {
      try {
        const res = await getApiServices.get("/tasks");
        setTasks(res);

      }catch(err)
      {
        console.error("Error fetching tasks:", err);
      }
    }

    useEffect(() => {
      fetchTasks();
    }, []);

    const handleUpdateTask = async (updatedTask: Task) => {
  try {
    const res = await getApiServices.put(
      `/tasks/${updatedTask.id}`,
      updatedTask
    );

    // update UI
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? res : task
      )
    );

    setEditTask(null); // close form
  } catch (err) {
    console.error("Error updating task:", err);
  }
};
const handleEditTask = (task: Task) => {
  console.log("Edit is clcked for task:", task);
  setEditTask(task);
  setShowForm(false); // hide add form
}
const handleDeleteTask = async (id: number | string) => {
  try {
    await getApiServices.delete(`/tasks/${id}`);

    // remove from UI
    setTasks((prev) => prev.filter((task) => task.id !== id));
  } catch (err) {
    console.error("Error deleting task:", err);
  }
};

const handleCompleteTask = async (task: Task) => {
  try {
    const updatedTask = { ...task, completed: true };

    const res = await getApiServices.put(
      `/tasks/${task.id}`,
      updatedTask
    );

    // update UI
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? res : t
      )
    );
  } catch (err) {
    console.error("Error completing task:", err);
  }
};
    

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.setItem("isLoggedIn" , "false");
        navigate("/");
      
    }
  return (
    <div>
      <Header logout = {handleLogout} />
      
      <button
  type="button"
  onClick={() => setShowForm(true)}
  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
>
  + Add Task
</button>
{showForm && (
  <AddTask onAddTask={onAddTask} />
)}


   <TaskList
  tasks={tasks}
  onEdit={handleEditTask}
  editTask={editTask}
  onDelete={handleDeleteTask}
  onComplete={handleCompleteTask} 
  onUpdateTask={handleUpdateTask}
  onCancel={() => setEditTask(null)}
/>
  
 

    </div>
  )
}

export default DashBoard
