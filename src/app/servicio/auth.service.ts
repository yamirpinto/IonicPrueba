import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay } from 'rxjs';
import { UsuarioLogeado } from '../UsuarioLogeado';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private cargando: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public $cargando = this.cargando.asObservable();
  private activeUser: BehaviorSubject<UsuarioLogeado | null> = new BehaviorSubject<UsuarioLogeado | null>(null);
  public $activeUser = this.activeUser.asObservable();
  private readonly URL_LOGIN = "https://dummyjson.com/auth/login";
  $usuarioActivo: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public intentarLogear(usuario: string, password: string) {
    console.log('Intentando hacer login con usuario:', usuario);
    this.http.post<UsuarioLogeado>(this.URL_LOGIN, JSON.stringify({
      username: usuario,
      password
    }),
    {
      headers: {
        "Content-Type":"application/json"
      }
    }
    )
    .pipe(delay(2000))
    .subscribe(
      resultado => {
        console.log('Respuesta del servidor:', resultado);
        this.activeUser.next(resultado);
        this.cargando.next(false);
        this.router.navigate(['perfil']);
      },
      error => {
        console.error('Error en la solicitud HTTP:', error);
        this.cargando.next(false);
      }
    );
  }

  public forzarLogin() {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      this.router.navigate(['/login']); 
    }
  }

  public getUsuarioLogeado(): UsuarioLogeado | null {
    return this.activeUser.getValue();
  }
}
