import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyTutorServiceService} from "../services/myTutorService.service";

interface CourseInterface {
  title: string;
  description: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css','../assets/vendor/animate.css/animate.min.css','../assets/vendor/aos/aos.css','../assets/vendor/bootstrap/css/bootstrap.min.css','../assets/vendor/bootstrap-icons/bootstrap-icons.css','../assets/vendor/boxicons/css/boxicons.min.css','../assets/vendor/remixicon/remixicon.css','../assets/vendor/swiper/swiper-bundle.min.css','../assets/css/style.css']
})
export class CoursesComponent implements OnInit {
  courseData: any;
  constructor(private http: HttpClient, private myTutorService: MyTutorServiceService) {
  }

  ngOnInit(): void {
    this.myTutorService.getCourseDetails()
      .subscribe(
        response => {
          this.courseData = response;
          // console.log(this.courseData)
        },
        error => {
          // Handle error if the request fails
          alert('Failed to register');
        }
      );
    }

  sendEmail(course: any) {
    const recipient = 'kazun2.kt@gmail.com';
    const sub = 'Enrolling to the course - '+ course.topic;
    const bdy = 'Hello Sir/Madam' +
      'I would like to enrole for this course. Please send me the payment details.' +
      'Thanks';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(bdy)}`;

    window.location.href = mailtoLink;
  }

}
