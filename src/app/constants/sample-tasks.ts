import { Task } from 'src/models/task';
import { Category } from 'src/models/category';

export const sampleTasks: Task[] = [
  {
    name: 'Do a backflip',
    status: false,
    id: 1,
    category: { name: 'Sports', id: 1 },
  },
  {
    name: 'Buy groceries',
    status: false,
    id: 2,
    category: { name: 'Sports', id: 1 },
  },
  {
    name: 'Bleach',
    status: true,
    id: 3,
    category: { name: 'Anime', id: 2 },
  },
  {
    name: 'Naruto',
    status: true,
    id: 4,
    category: { name: 'Anime', id: 2 },
  },
  {
    name: 'One Piece',
    status: false,
    id: 5,
    category: { name: 'Anime', id: 2 },
  },
  {
    name: 'Ghost Fighter',
    status: true,
    id: 6,
    category: { name: 'Anime', id: 2 },
  },
  {
    name: 'Math',
    status: false,
    id: 7,
    category: { name: 'Subjects', id: 3 },
  },
  {
    name: 'Science',
    status: false,
    id: 8,
    category: { name: 'Subjects', id: 3 },
  },
  {
    name: 'English',
    status: true,
    id: 9,
    category: { name: 'Subjects', id: 3 },
  },
];
