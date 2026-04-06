import TaskCard from "./TaskCard";
import UpdateTask from "./UpdateTask";
import type { Task } from "../Types/types";


interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number | string) => void; // ✅ NEW
  onComplete: (task: Task) => void; // ✅ NEW
  editTask: Task | null;
  onUpdateTask: (task: Task) => void;
  onCancel: () => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEdit,
  editTask,
  onDelete,
  onComplete,
  onUpdateTask,
  onCancel,
}) => {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <div key={task.id}>
          
          {/* Task Card */}
          <TaskCard
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onComplete={onComplete}
          />

          {/* ✅ Show form BELOW this card */}
          {editTask?.id === task.id && (
            <UpdateTask
              task={editTask}
              onUpdateTask={onUpdateTask}
              onCancel={onCancel}
            />
          )}

        </div>
      ))}
    </div>
  );
};

export default TaskList;