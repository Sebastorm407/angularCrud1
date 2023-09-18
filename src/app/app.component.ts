import { Component } from '@angular/core';
import { Employee } from './models/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //Array

  employeeArray: Employee[] = [
    {id: 1, name: "Sebastian", country: "US"},
    {id: 2, name: "Felipe", country: "US"},
    {id: 3, name: "Angie", country: "US"}
  ];

  selectedEmployee: Employee = new Employee(0, "", "");

  //Add

  addOrEdit(){

    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee(0, "", "");
  }

  //Update

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }


  //Delete

  delete(){
    if(confirm("Are you sure you want to delete ir?")){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee)
      this.selectedEmployee = new Employee(0, "", "");
    }
  }
}
