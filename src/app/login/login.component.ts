import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
	selector: 'app-login',
	imports: [FormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})

export class LoginComponent {
	constructor(public userService: UserService) { }
}
