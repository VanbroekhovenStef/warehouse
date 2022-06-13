import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/security/user';
import { Item } from '../item/item';
import { Packaging } from '../packaging/packaging';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  packaging: Packaging = { id: 0, type: "", weight: 0 };
  user: User = { id: 0, email: '', password: '', token: '' };
  item: Item = { id: 0, name: '' }

  @Input() product: Product = { id: 0, amountInStock: 0, userId: 0, packagingId: 0, itemId: 0, packaging: this.packaging, user: this.user, item: this.item }

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
