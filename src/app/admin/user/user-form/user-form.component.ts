import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  isAdd: boolean = false;
  isEdit: boolean = false;
  userId: number = 0;
  
  isSubmitted: boolean = false;
  errorMessage: string = '';
  nameChangeMessage: string = '';

  user$: Subscription = new Subscription();
  postUser$: Subscription = new Subscription();
  putUser$: Subscription = new Subscription();

  // reactive form
  userForm = new FormGroup({
    email: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private userService: UserService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.userId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.userId != null && this.userId > 0) {
      this.user$ = this.userService.getUserById(this.userId).subscribe(result => {
        this.userForm.setValue({
          email: result.email,
          role: result.role,
          password: result.password
        });
      });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
    this.postUser$.unsubscribe();
    this.putUser$.unsubscribe();
  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postUser$ = this.userService.postUser(this.userForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/user");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putUser$ = this.userService.putUser(this.userId, this.userForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/user");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }


}
