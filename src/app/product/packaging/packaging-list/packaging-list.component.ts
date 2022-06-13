import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Packaging } from '../packaging';
import { PackagingService } from '../packaging.service';

@Component({
  selector: 'app-packaging-list',
  templateUrl: './packaging-list.component.html',
  styleUrls: ['./packaging-list.component.scss']
})
export class PackagingListComponent implements OnInit, OnDestroy {

  packagings: Packaging[] = [];
  packagings$: Subscription = new Subscription();
  deletePackaging$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private packagingService: PackagingService, private router: Router) { }

  ngOnInit(): void {
    this.getPackagings();
  }

  ngOnDestroy(): void {
    this.packagings$.unsubscribe();
    this.deletePackaging$.unsubscribe();
  }

  add() {
    // Navigate to form in add mode
    this.router.navigate(['/product/packaging/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    // Navigate to form in edit mode
    this.router.navigate(['/product/packaging/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deletePackaging$ = this.packagingService.deletePackaging(id).subscribe(result => {
      // all went well
      this.getPackagings();
    }, error => {
      //error
      this.errorMessage = error.message();
    })
  }

  getPackagings() {
    this.packagings$ = this.packagingService.getPackagings().subscribe(result => this.packagings = result);
  }


}
