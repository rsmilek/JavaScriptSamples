import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private _filterBy: string;

  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  imageVisible: boolean = false;
  products: IProduct[] = [];
  productsFiltered: IProduct[] = [];
  errorMessage: string = "";
  subscription!: Subscription;

  public get filterBy() : string {
    return this._filterBy;
  }
  public set filterBy(value : string) {
    this._filterBy = value;
    console.log(`FilterBy setter: '${value}'`);
    this.productsFiltered = this.performFilter(this._filterBy);
  } 

  constructor(private _productService: ProductService) {
    this._filterBy = "";
  }

  ngOnInit(): void { 
    console.log("In OnInit!")
    this.subscription = this._productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.productsFiltered = this.performFilter(this._filterBy);
      },
      error: err => this.errorMessage = err
    });    
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
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
