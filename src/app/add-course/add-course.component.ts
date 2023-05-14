import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css','../assets/vendor/animate.css/animate.min.css','../assets/vendor/aos/aos.css','../assets/vendor/bootstrap/css/bootstrap.min.css','../assets/vendor/bootstrap-icons/bootstrap-icons.css','../assets/vendor/boxicons/css/boxicons.min.css','../assets/vendor/remixicon/remixicon.css','../assets/vendor/swiper/swiper-bundle.min.css','../assets/css/style.css']
})
export class AddCourseComponent implements OnInit{

  courseForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,  private router: Router) {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      topic: ['', [Validators.required]],
      subTopic: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      studentCount: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
  }
  ngOnInit() {
  }

  formData = {
    name: '',
    topic: '',
    subTopic:'',
    description:'',
    price:'',
    studentCount:'',
    email:''
  };
  onSubmit() {
    // Send POST request to the server
    this.http.post('http://localhost:5000/addCourse', this.formData)
      .subscribe(
        response => {
          alert('Successfully added');
          this.router.navigate(['/addCourse']);
          this.courseForm.reset();
        },
        error => {
          // Handle error if the request fails
          alert('Failed to add course');
        }
      );

    this.formData.name = '';
    this.formData.topic = '';
    this.formData.subTopic = '';
    this.formData.description = '';
    this.formData.price = '';
    this.formData.studentCount = '';
    this.formData.email = '';
  }
}
