import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-students',
  templateUrl: './register-students.component.html',
  styleUrls: ['./register-students.component.css','../assets/vendor/animate.css/animate.min.css','../assets/vendor/aos/aos.css','../assets/vendor/bootstrap/css/bootstrap.min.css','../assets/vendor/bootstrap-icons/bootstrap-icons.css','../assets/vendor/boxicons/css/boxicons.min.css','../assets/vendor/remixicon/remixicon.css','../assets/vendor/swiper/swiper-bundle.min.css','../assets/css/style.css']
})
export class RegisterStudentsComponent implements OnInit{
  studentForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,  private router: Router) {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.pattern('[0-9]{1,5}')]],
      contact: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]]
    });
  }
  ngOnInit() {
  }

  formData = {
    name: '',
    email: '',
    age:'',
    contact:'',
    password:'',
    role:'',
  };
  onSubmit() {
    // Send POST request to the server
    this.http.post('http://localhost:5000/registerUser', this.formData)
      .subscribe(
        response => {
          alert('Successfully Registered');
          this.router.navigate(['/login']);
        },
        error => {
          // Handle error if the request fails
          alert('Failed to register');
        }
      );

/*     this.formData.name = '';
    this.formData.email = '';
    this.formData.age = '';
    this.formData.contact = '';
    this.formData.password = '';
    this.formData.role = ''; */
  }
}
