import { Injectable } from '@angular/core';
import { CallService } from '../utils/call.service';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	username: string = "";
	password: string = "";
	token: string = "";

	constructor(private call: CallService) { }

	login(): boolean {
		this.call.callApi("login", { username: this.username, password: this.password })
		.subscribe(response => {
			localStorage.setItem("token", response.data.token);
			window.location.href = "/";
		}, error => {
			console.error(error);
		});

		return true;
	}

	checkToken(): boolean {
		// TODO
		return true;
	}

	getInfos(id: number): any {
		// TODO
		return {
			id: id,
			username: "username",
			password: "password",
			role: 1
		};
	}
}
