export interface UsuarioLogeado {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: "female" | "male" | "otro";
    image: string;
    token: string;
  }