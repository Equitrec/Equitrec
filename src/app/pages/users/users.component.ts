import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QrcodeComponent } from '../../components/qrcode/qrcode.component';

@Component({
	selector: 'app-users',
	imports: [RouterModule, QrcodeComponent],
	templateUrl: './users.component.html',
	styleUrl: './users.component.css'
})

export class UsersComponent {
	username: string = "";
	password: string = "";

	constructor() {
		this.username = "username";
		this.password = "password";
	}
}
