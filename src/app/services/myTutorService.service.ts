import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MyTutorServiceService {
  constructor(private http:HttpClient) {
  }
  getCourseDetails(){
    return this.http.get('http://localhost:5000/getCourses');
  }
}
