import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();

    // Onderstaande is optioneel voor de log
    let data = this.productService.getProducts();
    console.log("dit is de log", data);
  }

}
