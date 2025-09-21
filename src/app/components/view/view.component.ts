import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, toArray } from 'rxjs';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  data$:Observable<Student[]>=of([]);
  finalData$:Observable<Student[]>=of([]);
  idValue!:string;
  constructor(private service:StudentService,private active:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
    this.idValue = String(this.active.snapshot.paramMap.get('id'));
    if(this.idValue){
      this.deleteRecord(this.idValue);
    }
    this.getData();
  }
  // getData(){
  //   this.data$=this.service.viewStudent();
  //   this.finalData$=this.data$.pipe(map((d)=>d.sort((a:Student,b:Student)=>a.username.localeCompare(b.username))));
  // }

  //For unique user
  getData(){
    this.data$ = this.service.viewStudent();
    this.finalData$ = this.data$.pipe(map((d)=>d.sort((a:Student,b:Student)=>a.username.localeCompare(b.username))));
    this.finalData$.pipe(toArray());
    let newArr;
    this.finalData$.subscribe((d)=>{
      newArr = d;
      if(newArr){
        const data = JSON.stringify(newArr);
        localStorage.setItem("Student",data);
      }
    });
  }
  searchValue(e:any){
    const valueGiven = e.target.value;
    if(!valueGiven){
      this.finalData$=this.data$;
      return;
    }
    else{
      this.finalData$=this.data$
      .pipe(map((d)=>{
        return d.filter((student)=>student.username.toString().includes(valueGiven) || student.id.toString().includes(valueGiven))
    }));
    }
  }
  deleteRecord(id:any){
    this.service.deleteStudentById(id).subscribe((d)=>{
      this.route.navigate(['/viewStudent'])
    })
  }

}
