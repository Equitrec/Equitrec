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

	users = [
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

	delete(id: number): boolean {
		this.users = this.users.filter(u => u.id !== id);

		console.log("User deleted:", id);

		return true;
	}

	update(id: number): boolean {
		const index = this.users.findIndex(u => u.id === id);

		this.users[index].username = this.username;
		this.users[index].role = this.role;

		console.log("User updated:", this.users[index]);

		this.router.navigate(["/"]);

		return true;
	}

	login(): boolean {
		this.call.callApi("login", { username: this.username, password: this.password })
		.subscribe(response => {
			localStorage.setItem("token", response.data.token);

			this.router.navigate(['/']);
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
		return this.users.find(user => user.id === id) || {
			id: 0,
			username: "Utilisateur inconnu",
			password: "Aucun mot de passe disponible",
			role: 0
		};
	}
}
