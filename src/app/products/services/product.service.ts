import {Injectable} from '@angular/core';
import {Product} from "../../core/models/product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TVA} from "../../core/models/tva";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }

  remove(product: Product): Observable<Product[]> {
    return this.getAll();
  }

  fetchAllTVA(): Observable<TVA[]> {
    return this.http.get<TVA[]>('http://localhost:8080/api/rates/tva');
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/api/products/${id}`);
  }
}
