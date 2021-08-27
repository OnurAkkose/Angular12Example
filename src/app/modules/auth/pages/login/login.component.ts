import { UserModel } from 'src/app/models/user/user';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Login } from 'src/app/core/store/actions/user.actions';
import { AuthenticationState } from 'src/app/core/store/states/user.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Select(AuthenticationState.userInfo) user! : Observable<UserModel>
  authForm!: FormGroup
  token! : UserModel
  userToken!: UserModel
  constructor(private store: Store, private fb: FormBuilder, private router: Router) 
  {
    this.authForm = this.fb.group({
      email: '',
      password: ''
    })
  }
  ngOnInit(): void {
  }
  login() { 
    console.log(this.authForm.value)
    this.store.dispatch(new Login(this.authForm.value));
    this.user.subscribe((result) => this.userToken = result)
    localStorage.setItem("token", this.userToken.token);
    localStorage.setItem("user", JSON.stringify(this.authForm.value));
    if(this.userToken.token.length > 1) this.router.navigate(['']);  
  }
}
