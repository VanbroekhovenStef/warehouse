import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Packaging } from '../packaging';
import { PackagingService } from '../packaging.service';

@Component({
  selector: 'app-packaging-form',
  templateUrl: './packaging-form.component.html',
  styleUrls: ['./packaging-form.component.scss']
})
export class PackagingFormComponent implements OnInit, OnDestroy {

  isAdd: boolean = false;
  isEdit: boolean = false;
  packagingId: number = 0;

  packaging: Packaging = { id: 0, type: "", weight: 0};

  isSubmitted: boolean = false;
  errorMessage: string = "";

  packaging$: Subscription = new Subscription();
  postPackaging$: Subscription = new Subscription();
  putPackaging$: Subscription = new Subscription();

  constructor(private router: Router, private packagingService : PackagingService) { 
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.packagingId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.packagingId != null && this.packagingId > 0) {
      this.packaging$ = this.packagingService.getPackagingById(this.packagingId).subscribe(result => this.packaging = result);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.packaging$.unsubscribe();
    this.postPackaging$.unsubscribe();
    this.putPackaging$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postPackaging$ = this.packagingService.postPackaging(this.packaging).subscribe(result => {
        this.router.navigateByUrl("/product/packaging");
      },
      error => {
        this.errorMessage = error.message;
      });
    }
    if(this.isEdit) {
      this.putPackaging$ = this.packagingService.putPackaging(this.packagingId, this.packaging).subscribe(result => {
        this.router.navigateByUrl("/product/packaging");
      },
      error => {
        this.errorMessage = error.message;
      });
    }
  }

}
