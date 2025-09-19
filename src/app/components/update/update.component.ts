import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  formG!:FormGroup;
  id!:string;
  constructor(private formBuilder:FormBuilder,private service:StudentService,private active:ActivatedRoute,private route:Router){
  }
  ngOnInit(): void {
    this.id = String(this.active.snapshot.paramMap.get('id'));
    if(this.id){
      this.service.getStudentById(this.id).subscribe((d)=>{
        this.formG.patchValue(d)
      }
      )
    }
    this.formG = this.formBuilder.group({
      username:["",[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      password:["",[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$')]],
      mobile:["",[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      email:["",[Validators.required,Validators.email]],
      dateofBirth:["",[Validators.required,this.date]]
    });
  }
  date(cont:AbstractControl):ValidationErrors | null{
    const pat = /^\d{4}-\d{2}-\d{2}$/;
    if(!pat.test(cont.value)){
      return {retVal : true};
    }
    return null;
  }
  updateInfo(){
    if(this.formG.valid){
      this.service.updateStudent(this.id,this.formG.value).subscribe();
      this.route.navigate(['/viewStudent'])
      alert("success");
    }
  }

}
