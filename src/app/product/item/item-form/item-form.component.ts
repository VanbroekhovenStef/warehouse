import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  itemId: number = 0;

  item: Item = { id: 0, name: ""};

  isSubmitted: boolean = false;
  errorMessage: string = "";

  item$: Subscription = new Subscription();
  postItem$: Subscription = new Subscription();
  putItem$: Subscription = new Subscription();

  constructor(private router: Router, private itemService : ItemService) { 
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.itemId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.itemId != null && this.itemId > 0) {
      this.item$ = this.itemService.getItemById(this.itemId).subscribe(result => this.item = result);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.item$.unsubscribe();
    this.postItem$.unsubscribe();
    this.putItem$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postItem$ = this.itemService.postItem(this.item).subscribe(result => {
        this.router.navigateByUrl("/product/item");
      },
      error => {
        this.errorMessage = error.message;
      });
    }
    if(this.isEdit) {
      this.putItem$ = this.itemService.putItem(this.itemId, this.item).subscribe(result => {
        this.router.navigateByUrl("/product/item");
      },
      error => {
        this.errorMessage = error.message;
      });
    }
  }

}
