import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from './services/users/user.service';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		RouterModule
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {
	title = "Equitrec";
	subtitle = "La notation tel que vous ne l'avez jamais vue !";

	constructor(public userService: UserService) { }
}
