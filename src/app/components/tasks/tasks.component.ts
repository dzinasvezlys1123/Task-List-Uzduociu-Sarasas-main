import { Component, OnInit } from '@angular/core';
import {Task} from "../../models/Task";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks:Task[]=[];

  constructor(private taskService:TasksService) {
    this.tasks=taskService.tasks;
  }

  ngOnInit(): void {
  }

  public onReceivedDelete(i:number){
    this.taskService.delete(i);

  }

}
