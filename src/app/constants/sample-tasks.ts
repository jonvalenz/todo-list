import { Task } from 'src/models/task';
import { Category } from 'src/models/category';

export const sampleTasks: Task[] = [
  {
    name: 'Do a backflip',
    done: false,
    id: 1,
    category: { name: 'Sports', id: 1 },
  },
  {
    name: 'Buy groceries',
    done: false,
    id: 2,
    category: { name: 'Sports', id: 1 },
  },
];
