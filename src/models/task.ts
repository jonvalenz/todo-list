import { Category } from './category';

export class Task {
  status?: boolean;
  name?: string;
  id?:number;
  category?:Category;
  constructor() {
    this.status = false;
    this.name = '';
  }
}
