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
  {
    name: 'Bleach',
    done: true,
    id: 3,
    category: { name: 'Anime', id: 2 },
  },
  {
    name: 'Naruto',
    done: true,
    id: 4,
    category: { name: 'Anime', id: 2 },
  },
  {
    name: 'One Piece',
    done: false,
    id: 5,
    category: { name: 'Anime', id: 2 },
  },
  {
    name: 'Ghost Fighter',
    done: true,
    id: 6,
    category: { name: 'Anime', id: 2 },
  },
  {
    name: 'Math',
    done: false,
    id: 7,
    category: { name: 'Subjects', id: 3 },
  },
  {
    name: 'Science',
    done: false,
    id: 8,
    category: { name: 'Subjects', id: 3 },
  },
  {
    name: 'English',
    done: true,
    id: 9,
    category: { name: 'Subjects', id: 3 },
  },
];
