import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  usuario:any 


  /*constructor(public userService: LoginServiceService,
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.email],
        password: ['', Validators.required] 
    })
  }*/

  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }


  ngOnInit(): void {
  }
  
  get email(){
    return this.loginForm.get('email') as FormControl;
   }

   get password(){
    return this.loginForm.get('password') as FormControl;
  }

  /*login(contacto:any){
    this.userService.userlogin(this.loginForm.value).subscribe()
    this.router.navigateByUrl('')
  }*/

  login(contacto:any){
    
  }
  
}

