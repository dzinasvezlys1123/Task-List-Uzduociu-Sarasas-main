import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../../models/Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:Task|null=null;
  @Input() index:number|null=null;

  @Output() taskDelete=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  public buttonDeletePressed(){
    if(this.index!=null){
      this.taskDelete.emit(this.index);
    }

  }

}
