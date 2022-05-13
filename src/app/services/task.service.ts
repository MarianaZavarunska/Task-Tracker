import { Injectable } from "@angular/core";

import { TASKS } from "../mock-tasks";
import { ITask } from "../interfaces/task.interface";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor() {}
}
