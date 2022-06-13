import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  user: User = {id: 0, email: '', password: '', token: '', role: '' };

  isSubmitted: boolean = false;
  errorMessage: string = '';

  isLogin: boolean = false;
  isRegister: boolean = false;
  isLogout: boolean = false;

  postUser$: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router) {
    this.isLogin = this.router.url === '/login';
    this.isRegister = !this.isLogin;
  }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/login': {
        this.isLogin = true;
        break;
      }
      case '/logout': {
        this.isLogout = true;
        this.authService.deleteToken();
        this.router.navigate(['']);
        break;
      }
      case '/register': {
        this.isRegister = true;
        break;
      }
      default: {
        this.isLogin = true;
        break;
      }
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.isLogin) {
      this.authService.authenticate(this.user).subscribe(result => {
        this.errorMessage = '';
        // save access token localstorage
        localStorage.setItem('token', result.accessToken);
        localStorage.setItem('id', result.user.id.toString());
        localStorage.setItem('email', result.user.email);
        localStorage.setItem('role', result.user.role);
        this.router.navigate(['']);
      }, error => {
        this.errorMessage = 'Email/password not correct!';
        this.isSubmitted = false;
      });
    } else if (this.isRegister) {
      this.authService.register(this.user).subscribe(result => {
        this.errorMessage = '';
        this.router.navigate(['login'])
      }, error => {
        this.errorMessage = 'Something went wrong!';
        this.isSubmitted = false;
      })
    }
  }



}
