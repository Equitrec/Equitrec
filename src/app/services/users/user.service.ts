import { Injectable } from '@angular/core';
import { CallService } from '../utils/call.service';
import { Router } from '@angular/router';

export interface User {
	username: string,
	role: number,
}

@Injectable({
	providedIn: 'root'
})

export class UserService {
	user: User[] = [];

	username: string = "";
	password: string = "";
	token: string = "";
	role: number = 0;

	constructor(private call: CallService, public router: Router) { }

	add(competitionId: number): boolean {
		this.user.push({
			username: this.username,
			role: this.role
		});

		console.log("User added:", this.user);

		this.router.navigate(['/competition', competitionId]);

		return true;

	}

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
		const users = [
			{
				id: 1,
				username: 'jules.dupont',
				password: 'password',
				role: 2
			},
			{
				id: 2,
				username: 'juliette.auberville',
				password: 'password1243',
				role: 2
			},
			{
				id: 3,
				username: 'jerome.belier',
				password: 'password',
				role: 2
			},
			{
				id: 4,
				username: 'marie.leroux',
				password: 'password123',
				role: 1
			},
			{
				id: 5,
				username: 'antoine.martin',
				password: 'securepass',
				role: 1
			},
			{
				id: 6,
				username: 'camille.durand',
				password: 'mypassword',
				role: 1
			},
			{
				id: 7,
				username: 'lucas.moireau',
				password: 'passw0rd',
				role: 1
			},
			{
				id: 8,
				username: 'sophie.bernard',
				password: 's0phie123',
				role: 1
			},
			{
				id: 9,
				username: 'paul.leclerc',
				password: 'paulpass',
				role: 1
			},
			{
				id: 11,
				username: 'admin',
				password: 'adminpass',
				role: 10
			}
		];

		return users.find(user => user.id === id) || {
			id: 0,
			username: "Utilisateur inconnu",
			password: "Aucun mot de passe disponible",
			role: 0
		};
	}
}
