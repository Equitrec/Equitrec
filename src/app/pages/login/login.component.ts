import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/users/user.service';

@Component({
	selector: 'app-login',
	imports: [FormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})

export class LoginComponent {
	constructor(public userService: UserService) {
		if (userService.checkToken()) {
			window.location.href = '/';
		}
	}
}
