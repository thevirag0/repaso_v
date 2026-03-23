import { Component, inject, model, OnInit, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import * as userService from '../../services/user/user-service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  imports: [
    TableModule, ButtonModule, DialogModule, FormsModule, InputTextModule,
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})

export class UserList implements OnInit {
  userService = inject(userService.UserService);
  users = signal<userService.User[]>([]);
  visible: boolean = false;
  voidUser: userService.User = { id: 0, email: '', name: '', password: '' }
  editUser = model<userService.User>({...this.voidUser});
  message = signal<string>('');
  isAdd: boolean = false;
  isReadonly = signal<boolean>(false);
  isDeletion : boolean = false;

  //metodos
  ngOnInit(): void {
    this.users.set(this.userService.getUsers());
  }

  modificar(userFila: userService.User) {
    this.message.set("Edit an existing user.")
    this.editUser.set(userFila);

    this.visible = true;
  }

  borrar(userFila: userService.User) {
    //sacar dialogo con readonly o mensaje de confirmación para confirmar
    this.visible = true;
    this.isReadonly.set(true);
    this.message.set("Confirm deletion.");
    this.editUser.set(userFila);
  }
 
  guardar() {
    if (this.isAdd) {
      this.isReadonly.set(false);
      this.userService.add(this.editUser());
      this.editUser.set({...this.voidUser});
    } else {
      this.isReadonly.set(false);
      this.visible = false;
    }
  }


  nuevo() {
    this.isAdd = true;
    this.visible = true;
    this.message.set("Add a new user.")
    this.editUser.set({...this.voidUser});


  }
}
