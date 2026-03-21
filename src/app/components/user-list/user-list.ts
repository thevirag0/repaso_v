import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserService } from '../../services/user/user-service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-user-list',
  imports: [ 
    TableModule, ButtonModule, DialogModule
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})

export class UserList {
  userService = inject(UserService);
    users = this.userService.returnUsers();
visible: boolean = false;
//metodos

modificar(){
  this.visible = true;
  

}
borrar(){

}

  }

