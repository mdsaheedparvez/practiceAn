import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  myform!:FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

    this.myform = this.fb.group({
      id:[''],
      addEmpdetails: this.fb.array([this.addempdetails()])
    })
  }
    addempdetails(){
      return this.fb.group({
        firstname: [''],
        lastName: [''],
        email: [''],
      })
    }

    getDetails(){
      return this.myform.get('addEmpdetails') as FormArray
    }
  
    addEmp(){
      this.getDetails().push(this.addempdetails());
    }


  deleteEmp(i:number)
  {
    if(this.getDetails().length>1)
    this.getDetails().removeAt(i);
    else
    this.getDetails().reset();
  }



}
