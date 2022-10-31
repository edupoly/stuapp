import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(public http:HttpClient) { }
  students:any=[];
  ngOnInit(): void {
    this.http.get("http://localhost:4000/listStudents").subscribe((res)=>{
      this.students=res;
    })
  }

}
