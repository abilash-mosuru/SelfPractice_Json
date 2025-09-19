import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})
export class ViewByIdComponent implements OnInit{
  stud$!:Student;
  id!:string;
  constructor(private service:StudentService,private active:ActivatedRoute){
  }
  ngOnInit(): void {
    // this.active.params.subscribe(para=>{
    //   const d = para['id'];
    //   this.getStudentById(d);
    // })
    this.id = String(this.active.snapshot.paramMap.get('id'));
    this.getStudentById(this.id);
  }
  getStudentById(id:any){
    this.service.getStudentById(id).subscribe((data)=>{
      this.stud$ = data;
    })
  }

}
