import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsRepository } from '../models/products.repository';
import { ProductService } from '../services/product.service';
import { AlertifyService } from '../services/alertify.service';

//declare let alertify:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private alertifyService:AlertifyService
    ) { }
  
  productRepository = new ProductsRepository();
  products: Product[] = [];
  popularProducts: Product[] = [];
  //products = this.productRepository.getProducts();
  //popularProducts = this.productRepository.getPopularProducts();

  filteredProducts = this.products;
  addToChart($event:any,item:any):any{
    console.log(item);
    console.log($event);
    if ($event.target.classList.contains('btn-success')) {
      $event.target.classList.remove('btn-success');
      $event.target.classList.add('btn-danger');
      $event.target.innerText='Sepete eklendi';
      this.alertifyService.basarili('sepete eklendi');
    }
    else{
      $event.target.classList.add('btn-success');
      $event.target.classList.remove('btn-danger');
      $event.target.innerText='Sepete ekle';
      this.alertifyService.hatali('sepetten çıkarıldı');
    }
  }
  searchKey:string="";
  ngOnInit(): void {
    //this.productService.getProduct().subscribe(data=>this.product=data);
   // this.productService.getPopularProduct().subscribe(data=>this.product=data);
   this.productService.getProduct().subscribe(
    data => {
      this.products = data
      //this.productsFiltered = data;
      //this.popularProducts = data;
    }
  );
  this.productService.getPopularProduct().subscribe(
    data => {
      this.popularProducts = data
      //this.productsFiltered = data;
      //this.popularProducts = data;
    }
  );
  }

}
