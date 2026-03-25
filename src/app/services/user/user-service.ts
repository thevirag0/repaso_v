import { Injectable, ModelSignal } from '@angular/core';

export interface User {
  id: number,
  name: string,
  email: string,
  password: string
}
//singleton -- 
@Injectable({
  providedIn: 'root',
})

export class UserService {

  //array de user
  private users: User[] = [{ id: 1, name: "pepe", email: "pepe@gmail.com", password: "1234" },
  { id: 2, name: "maria", email: "maria@gmail.com", password: "3456" }];

  getUsers(): User[] {
    return this.users;
  }
  //atributo para saber que usuario esta loggeado
  currentUser: User | null = null;

  //método
  validate(email: string, password: string): boolean {
    var encontrado = false;
    //recorrer el array para buscar el usuario
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == email && this.users[i].password == password) {
        encontrado = true;
        this.currentUser = this.users[i];
        break;
      } else {
        this.currentUser = null;
      }
    };
    return encontrado;
  }

  returnUsers(): User[] {
    return this.users;
  }

  getCurrentUser(): User | null {
    if (this.currentUser != null) {
      return this.currentUser;
    } else {
      return null;
    }
  }

  add(editUser: User) {
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].email === editUser.email){
        console.log("email existent")
        throw new Error("El email introducido ya existe.");
      }
    }
    
    this.users.push(editUser);
  }

  delete(editUser: User){
    let deleted = false;
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id === editUser.id){
        this.users.splice(i, 1);
        deleted = true;
        break;
      }
    }
    if(deleted == false){
      throw new Error("No se encontró el usuario para borrar.")
    }
  }
}



