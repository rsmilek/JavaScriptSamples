import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private _filterBy: string;

  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  imageVisible: boolean = false;
  products: IProduct[] = [];
  productsFiltered: IProduct[] = [];

  public get filterBy() : string {
    return this._filterBy;
  }
  public set filterBy(value : string) {
    this._filterBy = value;
    console.log("In setter", value);
    this.productsFiltered = this.performFilter(this._filterBy);
  } 

  constructor(private _productService: ProductService) {
    this._filterBy = "";
  }

  ngOnInit(): void { 
    console.log("In OnInit!")
    this.products = this._productService.getProducts();
    this.productsFiltered = this.performFilter(this._filterBy);
  }

  toggleImage(): void {
    this.imageVisible = !this.imageVisible;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();    
    return this.products.filter((x: IProduct) => x.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Page Title: " + message;
  }
}
