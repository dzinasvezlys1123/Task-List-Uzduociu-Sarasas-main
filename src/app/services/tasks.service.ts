import {EventEmitter, Injectable} from '@angular/core';
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks:Task[]=[];
  private _taskUpdate=new EventEmitter();

  constructor() {
    this.load();
  }

  public addTask(name:string, type:string){
    this._tasks.push(new Task(name,type));
    this.saveTasks();
    this._taskUpdate.emit();
  }

  public get tasks(){
    return this._tasks;
  }

  public get taskUpdate(){
    return this._taskUpdate;
  }

  public saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

  public delete(i:number){
    this._tasks.splice(i, 1);
    this.saveTasks();
    this._taskUpdate.emit();
  }

  public updateTasks(i:number, name:string, type:string){
    this._tasks[i].name=name;
    this._tasks[i].type=type;
    this._taskUpdate.emit();
  }

  public load(){
    const data=localStorage.getItem('tasks');
    if(data!=null){
      this._tasks=JSON.parse(data);
    }
  }


}
