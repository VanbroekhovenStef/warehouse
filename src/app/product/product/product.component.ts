import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = { id: 0, amountInStock: 0, userId: 0, packagingId: 0, itemId: 0 }
  
  products: any = {};
  products$: Subscription = new Subscription();
  deleteProduct$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    console.log("data", this.products);
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
    this.deleteProduct$.unsubscribe();
  }

  add() {
    // Navigate to form in add mode
    this.router.navigate(['/product/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    // Navigate to form in edit mode
    this.router.navigate(['/product/form'], {state: {id: id, mode: 'edit'}});
  }

  // delete(id: number) {
  //   this.deleteProduct$ = this.productService.deleteProduct(id).subscribe(result => {
  //     // all went well
  //     this.getItems();
  //   }, error => {
  //     //error
  //     this.errorMessage = error.message();
  //   })
  // }

  getProducts() {
    this.products$ = this.productService.getProducts().subscribe(result => this.products = result);
  }
}
