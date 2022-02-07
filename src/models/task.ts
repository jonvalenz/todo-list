import { Category } from './category';

export class Task {
  done?: boolean;
  name?: string;
  id?:number;
  category?:Category;
  constructor() {}
}
