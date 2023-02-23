import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public name:string|null=null;
  public type:string|null="";
  public types:string[]=["Skubus", "Rutininis", "Neskubus", "Ypač skubus"];
  constructor(private tasksService:TasksService, private router:Router) {

  }

  ngOnInit(): void {
  }

  public addTask(){
    if(this.name!=null && this.type!=null){
     this.tasksService.addTask(this.name, this.type);
     this.name=null;
     this.type=null;
     this.router.navigate(['/']);
    }
  }

}
