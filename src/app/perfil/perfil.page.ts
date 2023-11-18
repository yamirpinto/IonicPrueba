import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';
import { UsuarioLogeado } from '../UsuarioLogeado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public usuarioLogueado: UsuarioLogeado | null = null;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuarioLogueado = this.auth.getUsuarioLogeado();

    // this.auth.$usuarioActivo.subscribe((usuario: UsuarioLogeado | null) => {
    //   this.usuarioLogueado = usuario;
    // });
  }
  irAPaginaProductos() {
    this.router.navigate(['/productos']);
  }
}
