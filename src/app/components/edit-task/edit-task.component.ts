import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  public name:string|null=null;
  public type:string|null="";
  public types:string[]=["Skubus", "Rutininis", "Neskubus", "Ypač skubus"];
  public index:number|null=null;
  constructor(
    private taskService:TasksService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.index=route.snapshot.params['id'];
    if(this.index!=null){
      const task=this.taskService.tasks[this.index];
      this.name=task.name;
      this.type=task.type;
    }

  }

  ngOnInit(): void {
  }

  public update(){
    if(this.index!=null && this.name!=null && this.type!=null)
    this.taskService.updateTasks(this.index, this.name, this.type);
    this.router.navigate(["/"]);
  }

}
