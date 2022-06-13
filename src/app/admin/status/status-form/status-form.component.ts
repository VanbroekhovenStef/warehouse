import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent implements OnInit, OnDestroy {

  isAdd: boolean = false;
  isEdit: boolean = false;
  statusId: number = 0;
  
  isSubmitted: boolean = false;
  errorMessage: string = '';
  nameChangeMessage: string = '';

  status$: Subscription = new Subscription();
  postStatus$: Subscription = new Subscription();
  putStatus$: Subscription = new Subscription();

  // reactive form
  statusForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private router: Router, private statusService: StatusService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.statusId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.statusId != null && this.statusId > 0) {
      this.status$ = this.statusService.getStatusById(this.statusId).subscribe(result => {
        this.statusForm.setValue({
          name: result.name,
        });
      });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.status$.unsubscribe();
    this.postStatus$.unsubscribe();
    this.putStatus$.unsubscribe();
  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postStatus$ = this.statusService.postStatus(this.statusForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/status");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putStatus$ = this.statusService.putStatus(this.statusId, this.statusForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/status");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }

}
