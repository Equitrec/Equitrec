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
			role: 2,
			token: "Llj5PAOqU2sm0edATrKC7zdU50suJVt1"
		},
		{
			id: 2,
			username: 'juliette.auberville',
			password: 'password1243',
			role: 2,
			token: "XyZ9QWErT6u8vB3n4m5pL7k8jH2q1s0a"
		},
		{
			id: 3,
			username: 'jerome.belier',
			password: 'password',
			role: 2,
			token: "VW03MH2kiKUCQqbW2vj3sQI6SPqTDzpR"
		},
		{
			id: 4,
			username: 'marie.leroux',
			password: 'password123',
			role: 1,
			token: "LKuU33oi6cJ7E2p6Vas797cG17SioS2f"
		},
		{
			id: 5,
			username: 'antoine.martin',
			password: 'securepass',
			role: 1,
			token: "ZyXwVUTSRQPONMLKJIHGFEDCBA9876543210"
		},
		{
			id: 6,
			username: 'camille.durand',
			password: 'mypassword',
			role: 1,
			token: "54oib1CZsvtGR9R9qbITgUliea2812JT"
		},
		{
			id: 7,
			username: 'lucas.moireau',
			password: 'passw0rd',
			role: 1,
			token: "VzupXtzEmw9O4QtRB10a75xyf4QsExgI"
		},
		{
			id: 8,
			username: 'sophie.bernard',
			password: 's0phie123',
			role: 1,
			token: "fXbajfG3li1Zy0g2AAumC3YypewaDEds"
		},
		{
			id: 9,
			username: 'paul.leclerc',
			password: 'paulpass',
			role: 1,
			token: "HZTxthQ9a1yuEOlVgbzDp3KhXYsJLRGt"
		},
		{
			id: 11,
			username: 'admin',
			password: 'adminpass',
			role: 10,
			token: "a54ZH6HHWJmkw45BUb6xleVImYRMw0qQ"
		}
	];

	constructor(private call: CallService, public router: Router) { }

	add(competitionId: number): boolean {
		try {
			this.call.callApi(
				"user/add",
				"post",
				{
					"id": competitionId,
					"username": this.username,
					"role": this.role
				}
			)
			.subscribe(response => {
				// return true;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error adding user:", error);
		}

		this.user.push({
			username: this.username,
			role: this.role
		});

		console.log("User added:", this.user);

		this.router.navigate(['/competition', competitionId]);

		return true;
	}

	delete(id: number): boolean {
		try {
			this.call.callApi("user/delete/" + id, "delete", { })
			.subscribe(response => {
				// return true;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error deleting user:", error);
		}

		if (confirm("Etes-vous sûr de vouloir supprimer cet utilisateur ?")) {
			this.users = this.users.filter(u => u.id !== id);

			console.log("User deleted:", id);

			return true;
		} else {
			return false;
		}
	}

	update(id: number): boolean {
		try {
			this.call.callApi("user/update", "post", { "username": this.username, "role": this.role })
			.subscribe(response => {
				// return true;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error updating user:", error);
		}

		const index = this.users.findIndex(u => u.id === id);

		this.users[index].username = this.username;
		this.users[index].role = this.role;

		console.log("User updated:", this.users[index]);

		this.router.navigate(["/"]);

		return true;
	}

	login(): boolean {
		try {
			this.call.callApi("login", "post", { "username": this.username, "password": this.password })
			.subscribe(response => {
				localStorage.setItem("token", response.data.token);

				this.router.navigate(['/']);

				// return true;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error during login:", error);
		}

		if (this.users.some(user => user.username === this.username)) {
			const user = this.users.find(user => user.username === this.username);
			if (user && user.password === this.password) {
				localStorage.setItem("token", user.token);

				this.router.navigate(['/']);

				return true;
			}
		}

		return false;
	}

	disconnect(): boolean {
		localStorage.removeItem("token");
		this.router.navigate(['/login']);

		return true;
	}

	checkToken(): boolean {
		try {
			this.call.callApi("user/check", "post", { "username": this.username, "token": this.token })
			.subscribe(response => {
				// return response.message;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error checking token:", error);
		}

		if (this.users.some(user => user.token === localStorage.getItem("token"))) {
			return true;
		}
		return false;
	}

	getInfos(id: number): any {
		try {
			this.call.callApi("user/infos/" + id, "get", {})
			.subscribe(response => {
				// return response.data;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error fetching user info:", error);
		}

		return this.users.find(user => user.id === id) || {
			id: 0,
			username: "Utilisateur inconnu",
			password: "Aucun mot de passe disponible",
			role: 0
		};
	}
}
