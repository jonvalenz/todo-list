import { ITask } from '../../models/task';

export class Task implements ITask {
  status?: boolean;
  name?: string;
  id: string;
  categoryID: string;
  constructor() {
    this.status = false;
    this.name = '';
    this.id = '0';
    this.categoryID = '0';
  }
}
