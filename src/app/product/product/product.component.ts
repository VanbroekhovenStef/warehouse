import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/security/user';
import { Item } from '../item/item';
import { Packaging } from '../packaging/packaging';
import { PackagingComponent } from '../packaging/packaging.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  packaging: Packaging = { id: 0, type: "", weight: 0 };
  user: User = { id: 0, email: '', password: '', token: '', role: '' };
  item: Item = { id: 0, name: '' }

  @Input() product: Product = { id: 0, amountInStock: 0, userId: 0, packagingId: 0, itemId: 0, packaging: this.packaging, user: this.user, item: this.item }
  
  products: Product[] = [];
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

  delete(id: number) {
    this.deleteProduct$ = this.productService.deleteProduct(id).subscribe(result => {
      // all went well
      this.getProducts();
    }, error => {
      //error
      this.errorMessage = error.message();
    })
  }

  getProducts() {
    this.products$ = this.productService.getProducts().subscribe(result => this.products = result);
  }
}
