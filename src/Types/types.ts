export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email : string;
  password : string;
}


export interface HeaderProps {
  logout: () => void;
}

export interface Task {
  id  : number | string;
  title : string;
  description : string;
  completed : boolean;

}

export interface TaskProps {
 onAddTask : (task : Task) => void;
}

export interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number | string) => void;
  onComplete: (task: Task) => void;
}