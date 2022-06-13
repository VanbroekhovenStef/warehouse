import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    let token = this.authService.getToken();
    let role = localStorage.getItem('role');
    console.log(token);
    console.log(role);
  }

}
