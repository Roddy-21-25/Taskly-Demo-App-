import { Component, OnInit} from '@angular/core';
import { Task } from '../../TaskClass/task';
import { format } from 'date-fns';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-box-task',
  templateUrl: './base-box-task.component.html',
  styleUrls: ['./base-box-task.component.css','./base-box-task-two.component.css','./base-box-task-three.component.css','./base-box-task-four.component.css'
  ,'./base-box-task-five.component.css','./base-box-task-six.component.css']
})
// implements OnInit
export class BaseBoxTaskComponent{

  nameControl = new FormControl('', Validators.required);
  CheckControl = new FormControl('');
  descriptionControl = new FormControl('', Validators.required);
  resourcesControl = new FormControl('', Validators.required);

  currentDate: Date = new Date();
  DateFormat: string = format(this.currentDate, 'dd/MM/yyyy HH:mm');

  TaskList: Task[] = [
    {id: 1, name: 'to code the TO-DO List One', 
            description: 'Watch Videos about it', 
            date: this.DateFormat, 
            resourses:'Youtube Videos', 
            check: true},
    {id: 2, name: 'to code the TO-DO List Two', 
            description: 'Watch Videos about it', 
            date: this.DateFormat, 
            resourses:'Youtube Videos', 
            check: true}
  ];

  TaskCount: number = this.TaskList.length + 1;
  
  // id?: number;
  // name?: string;
  // description?: string;
  // date?: String;
  // resourses?: string;
  // check?: boolean;

  SendData(name: string, description: string, resources: string){
    const FreezerDate: string = this.DateFormat; 

    const newTask: Task = {
      id: this.TaskCount++,
      name: name,
      description: description,
      date: FreezerDate,
      resourses: resources,
      check: true
    };

    this.TaskList.push(newTask);
    localStorage.setItem("Task", JSON.stringify(this.TaskList));

    let TaskString = localStorage.getItem("Task");

    // if (TaskString !== null) {
    //   let TaskStorage: Task = JSON.parse(TaskString);

    //   console.log(TaskStorage);

    // } else {
    //   console.log("The Local Storage had found a Null!");
    // }

    this.nameControl.reset(); 
    this.descriptionControl.reset(); 
    this.resourcesControl.reset(); 
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  DetailsModalTask?: Task;
  getTaskById(taskHTML: Task) {
    this.DetailsModalTask = this.TaskList.find(task => task.id === taskHTML.id);
    return this.DetailsModalTask;
  }

  EditTask?: Task;
  UpdateTaskInfo(taskId?: number, name?: string, description?: string, resources?: string){
    this.EditTask = this.TaskList.find(task => task.id === taskId);
    if(this.EditTask){
      this.EditTask.name = name;
      this.EditTask.description = description;
      this.EditTask.resourses = resources;
    }
  }

  removeTask(taskId: Task): void {
    if(confirm('Do you Wanna Delete This Task?')){
      const index = this.TaskList.findIndex(task => task.id === taskId.id);
      if (index !== -1) {
        this.TaskList.splice(index, 1);
      }
    }
  }

}
