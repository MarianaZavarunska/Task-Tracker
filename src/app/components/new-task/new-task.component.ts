import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";

import { ITask } from "src/app/interfaces/task.interface";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.css"],
})
export class NewTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;
  showForm: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showForm = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert("Please, add task name!");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
