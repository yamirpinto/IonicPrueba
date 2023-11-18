import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoModel } from '../ProductoModel';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private readonly URL_PRODUCTOS = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  obtenerProductos(skip: number, limit: number): Observable<ProductoModel> {
    const url = `${this.URL_PRODUCTOS}?skip=${skip}&limit=${limit}`;
    return this.http.get<ProductoModel>(url);
  }
}