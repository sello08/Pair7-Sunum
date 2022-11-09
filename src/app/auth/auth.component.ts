import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService,LocalStorageService,Users} from 'src/libs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  [x: string]: any;

 users!:Users[];
  isLoginMode: boolean = false;
  // loading: boolean = false;
  // error: string="";

  authForm!: FormGroup;

  userName: string = "";
  password: string = "";
  error: string = '';

  constructor(private formBuilder: FormBuilder,
     private authService: AuthService,
      private localStorageService: LocalStorageService, 
      private router: Router,
      private toastr: ToastrService
      ) { }

  ngOnInit(): void {
    this.autForms();
    this.getUser();

  }

  getUser(): void {
    this.authService.getusers().subscribe((response) => {
      this.users = response;
    });
  }

  onToggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }


  autForms() {

    this.authForm = this.formBuilder.group({
      userName: new FormControl(null,
        [
          Validators.required,
        ]),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(3),
        ])

    });
  }

  singUpAdd() {
    if (this.isLoginMode) {

      const auth:Users = {
        ...this.authForm.value
      }
      this.authService.login(auth).subscribe({
        next: (response) => {
          console.info(`başarılı`, response);
          this.toastr.success("Login successful")
          this.localStorageService.setToken(response.access_token)
          this.router.navigate(['auth/login']);   
          
        },
        error: (err) => {
          console.log(err);
          this.error = err.statusText;
          this.toastr.warning("wrong password")
        },
        complete: () => {
          if (this.error) this.error = '';
          this.authForm.reset();
        },
      });
    }

    else {
      let find =this.users.find((u) => u.userName === this.userName);

   
       if(find===undefined){

      const user: Users = {
        ...this.authForm.value
      }
   
     
      this.authService.signUp(user).subscribe({
        next: (response) => {
          console.info(`kayıt başarılı ${response.userName},${response.password}`);
          this.toastr.error("New record created")
        },
        error: (err) => {
          console.log(err,);

          this.error = err.statusText;
        },
        complete: () => {
          if (this.error) this.error = "";
          console.log(this.error)
          this.authForm.reset();
        },
      });
    }
    else{
      this.toastr.error("Username cannot be used")
      this.error ="userName cannot be used";
      console.log(this.error);
    }
 
  }
  }
}