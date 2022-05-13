import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { ITask } from "../interfaces/task.interface";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};
@Injectable({
  providedIn: "root",
})
export class TaskService {
  private url = "http://localhost:4700/tasks";
  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.url);
  }

  deleteTask(task: ITask): Observable<ITask> {
    const url = `${this.url}/${task.id}`;
    return this.http.delete<ITask>(url);
  }

  updateTask(task: ITask): Observable<ITask> {
    const url = `${this.url}/${task.id}`;
    return this.http.put<ITask>(url, task, httpOptions);
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.url, task, httpOptions);
  }
}
