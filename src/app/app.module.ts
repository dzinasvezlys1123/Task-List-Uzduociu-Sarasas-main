import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FormsModule} from "@angular/forms";
import { TaskItemComponent } from './components/tasks/task-item/task-item.component';
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';

const appRoutes:Routes=[
  {path:"",component:TasksComponent},
  {path:"new", component:AddTaskComponent},
  {path:"about", component:AboutComponent},
  {path:"edit/:id", component:EditTaskComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    TaskDetailsComponent,
    EditTaskComponent,
    NavigationComponent,
    TaskItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
