import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
tweets:  any[]=[];
configUrl:any;
  constructor(private http: HttpClient) {
    this.configUrl="";
   }

  ngOnInit(): void {
     this.getData();
  }
  // getData(){
  //   return this.http.get("../../../../server/database.json")
  //   .subscribe(res=>{
  //     console.log("ok");
  //   });
  // }

  getData() {
    console.log("da vao");
     this.http.get("http://localhost:3000/tweets")
     .subscribe(respone =>{
       console.log("respone=", respone);
     })
   }
  //  npm install --save json-server
  //  npm install faker --save


}
