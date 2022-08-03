import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
    categoryRepository = new CategoryRepository();
    categories:Category[]=[];
    //categories = this.categoryRepository.getCategories();
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>this.categories=data);
  }
  
}
