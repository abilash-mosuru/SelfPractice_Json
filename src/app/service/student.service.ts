import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiURL:string="https://ec2-13-232-198-123.projects.wecreateproblems.com/proxy/7000/students";

  constructor(private httpCall:HttpClient) { 
  }
  addStudent(student:Student):Observable<any>{
    return this.httpCall.post(this.apiURL,student);
  }
  viewStudent():Observable<any>{
    return this.httpCall.get(this.apiURL)
  }
  getStudentById(d:any):Observable<any>{
    return this.httpCall.get(this.apiURL+"/"+d);
  }
  // getStudentById(d:any):Observable<any[]>{
  //   return this.httpCall.get(this.apiURL+"/"+d).pipe(map((data):any=>{
  //     if(Array.isArray(data)){
  //       return DataTransfer;
  //     }else{
  //       return [data];
  //     }
  //   })
  // );
  // }
  deleteStudentById(d:any):Observable<any>{
    return this.httpCall.delete(this.apiURL+"/"+d);
  }
  updateStudent(d:any,student:Student):Observable<any>{
    return this.httpCall.put(this.apiURL+"/"+d,student);
  }
}