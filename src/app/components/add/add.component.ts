import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  formG!:FormGroup;
  constructor(private formBuilder:FormBuilder,private service:StudentService){
    this.formG = this.formBuilder.group({
      username:["",[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      password:["",[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$')]],
      mobile:["",[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      email:["",[Validators.required,Validators.email]],
      dateofBirth:["",[Validators.required,Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]]
    });
  }
  addInfo(){
    if(this.formG.valid){
      this.service.addStudent(this.formG.value).subscribe((data)=>{
        console.log(data)
      });
      alert("success");
    }
  }

}
