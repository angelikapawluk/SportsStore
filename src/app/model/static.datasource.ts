import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, "Product 1", "Kategoria 1", "Product 1 (Kategoria 1)", 100),
    new Product(2, "Product 2", "Kategoria 2", "Product 2 (Kategoria 2)", 100),
    new Product(3, "Product 3", "Kategoria 3", "Product 3 (Kategoria 3)", 100),
    new Product(4, "Product 4", "Kategoria 4", "Product 4 (Kategoria 4)", 100),
    new Product(5, "Product 5", "Kategoria 5", "Product 5 (Kategoria 5)", 100),
    new Product(6, "Product 6", "Kategoria 6", "Product 6 (Kategoria 6)", 100),
    new Product(7, "Product 7", "Kategoria 7", "Product 7 (Kategoria 7)", 100),
    new Product(8, "Product 8", "Kategoria 8", "Product 8 (Kategoria 8)", 100),
    new Product(9, "Product 9", "Kategoria 9", "Product 9 (Kategoria 9)", 100),
    new Product(10, "Product 10", "Kategoria 10", "Product 10 (Kategoria 10)", 100),
    new Product(11, "Product 11", "Kategoria 11", "Product 11 (Kategoria 11)", 100),
    new Product(12, "Product 12", "Kategoria 12", "Product 12 (Kategoria 12)", 100),
    new Product(13, "Product 13", "Kategoria 13", "Product 13 (Kategoria 13)", 100),
    new Product(14, "Product 14", "Kategoria 14", "Product 14 (Kategoria 14)", 100),
    new Product(15, "Product 15", "Kategoria 15", "Product 15 (Kategoria 15)", 100),
  ];
  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }
}
