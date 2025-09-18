import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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
  constructor(private service:StudentService){}
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.data$=this.service.viewStudent();
    this.finalData$=this.data$.pipe(map((d)=>d.sort((a:Student,b:Student)=>a.username.localeCompare(b.username))));
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
    alert(id);
  }

}
