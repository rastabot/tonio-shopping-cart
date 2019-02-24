import { Component, OnInit } from '@angular/core';
import { Product } from '../one-product-detail';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products : Product[];

  constructor(private productService : ProductsDataService) { }


  getProducts():void {
    this.productService.getProducts()
    .subscribe(products => this.products = products)
  }
  ngOnInit() {
    this.getProducts();
  }

}
