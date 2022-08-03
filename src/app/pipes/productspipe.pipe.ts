import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productspipe'
})
export class ProductspipePipe implements PipeTransform {
  
  transform(products: Product[], searchKey:string): Product []{
    searchKey = searchKey.toLowerCase();
    if (!searchKey)return products;
    return products.filter(p=>p.title.toLowerCase().indexOf(searchKey) !==-1);
  }

}
