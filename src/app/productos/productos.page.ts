// productos.page.ts
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';
import { ProductoModel } from '../ProductoModel';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public productos: ProductoModel | null = null;
  public skip: number = 0;
  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    const limit = 30;

    this.productoService
      .obtenerProductos(this.skip, limit)
      .subscribe((productos: ProductoModel) => {
        this.productos = productos;
      });
  }
  avanzarPagina() {
    const limit = 30;
    this.skip += limit;
    this.obtenerProductos();
  }
  retrocederPagina() {
    const limit = 30;
    this.skip = Math.max(0, this.skip - limit);
    this.obtenerProductos();
  }
}
