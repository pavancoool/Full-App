import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

/*   textlist:any=''
  text:any=[]
  add(){
    if(this.textlist==""){
      alert('Enter the task to add')
    }else{
      this.text.push(this.textlist);
      //console.log(this.text);
    }
    
  }

  delete(index:any){
    this.text.splice(index,1);
  }

  touch(i:number){

    this.text = this.text.filter((x:number)=>x === i)[0];

  }
//////

tasks = [
  { name: 'Learn Angular', completed: false },
  { name: 'Build a Project', completed: true }
];

toggleTask(task: any) {
  task.completed = !task.completed;
} */


  newTask: string = '';
  tasks: { name: string; completed: boolean }[] = [];

  // Add a new task
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = ''; // Clear input after adding
    }
  }

  // Toggle completion status
  toggleTask(task: any) {
    task.completed = !task.completed;
  }

  // Delete completed tasks
  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
  

}
