import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  public count:number|null=null;
  constructor(private tasksService:TasksService) {
    this.count=this.tasksService.tasks.length;
    this.tasksService.taskUpdate.subscribe(()=>{
      this.count=this.tasksService.tasks.length;
    });
  }

  ngOnInit(): void {
  }

}
