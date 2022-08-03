import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  url ="http://localhost:3000/products";
  url2 ="http://localhost:3000/products?isPopular=true";

  constructor(private http:HttpClient) { }
  
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
  getPopularProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.url2);
  }
}
