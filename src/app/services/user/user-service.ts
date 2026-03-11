import { Injectable, ModelSignal } from '@angular/core';

export interface user{
  id:number,
  name:string,
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root',
})

export class UserService {
  
  //array de user
  users: user[] = [{id:1, name:"pepe",email:"pepe@gmail.com", password:"1234"}, 
    {id:2, name:"maria",email:"maria@gmail.com", password:"3456"}];
  
  //método
  validate(email: string, password: string | undefined): boolean {
    var encontrado = false;
    //recorrer el array para buscar el usuario
    for(let i= 0; i< this.users.length; i++){
      if(this.users[i].email == email && this.users[i].password == password){
        encontrado = true;
        break;
      }
    };
    return encontrado;
  }

}

