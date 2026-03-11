import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../services/user/user-service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
     FormsModule, ButtonModule, InputTextModule, FloatLabelModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //atributos
  email=model<string>('');
  password=model<string>('');
 //variable que queremos que recoja la inyeccion
  userService=inject(UserService);
  message=signal<string>('');
  //metodos
  logIn() {
    //programar validacion
    var validated = this.userService.validate(this.email(), this.password());
    if(validated){
      this.message.set("Validado");
    }else{
      this.message.set("Validación incorrecta");
    }
}

}
