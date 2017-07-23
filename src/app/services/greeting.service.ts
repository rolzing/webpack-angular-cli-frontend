import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GreetingService {
  greeting: any;
  constructor(private http: HttpClient) { }
  getGreetin() {
    this.http.get('http://localhost:8080/greeting').subscribe(data => {
      // console.log(data);
      return data;
    });
  }
}
