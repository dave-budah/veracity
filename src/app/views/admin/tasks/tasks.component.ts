import { Component } from '@angular/core';
import {taskData} from "./task-data";
import {NgForOf} from "@angular/common";
import {DraggableDirective} from "../../../shared/directives/draggable.directive";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf,
    DraggableDirective
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = taskData;
}
