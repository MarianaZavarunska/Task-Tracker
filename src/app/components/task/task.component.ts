import { Component, Input, OnInit } from "@angular/core";

import { ITask } from "src/app/interfaces/task.interface";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
