import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = { id: 0, amountInStock: 0, userId: 0, itemId: 0, packagingId: 0 }

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('test'));
    if (productId != null) {
      this.productService.getProductById(+productId).subscribe(result => this.product = result);
    }

    console.log("dit is de log", this.product);
  }

}
