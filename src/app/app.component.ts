import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from './services/users/user.service';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		RouterModule,
		NgIf
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {
	title = 'Equitrec';

	constructor(public userService: UserService) { }
}
