import { Injectable } from '@angular/core';
import { CallService } from '../utils/call.service';
import { Router } from '@angular/router';
import { CompetitionService } from '../competitions/competition.service';
import { Location } from '@angular/common';

export interface User {
	id: number,
	username: string,
	role: number,
}

@Injectable({
	providedIn: 'root'
})

export class UserService {
	user: User[] = [];

	id: number = 0;
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
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoianVsZXMuZHVwb250In0.dummysignature1"
		},
		{
			id: 2,
			username: 'juliette.auberville',
			password: 'password1243',
			role: 2,
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoianVsaWV0dGUuYXViZXJ2aWxsZSJ9.dummysignature2"
		},
		{
			id: 3,
			username: 'jerome.belier',
			password: 'password',
			role: 2,
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoiamVyb21lLmJlbGllciJ9.dummysignature3"
		},
		{
			id: 4,
			username: 'marie.leroux',
			password: 'password123',
			role: 1,
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJuYW1lIjoibWFyaWUubGVyb3V4In0.dummysignature4"
		},
		{
			id: 5,
			username: 'antoine.martin',
			password: 'securepass',
			role: 1,
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInVzZXJuYW1lIjoiYW50b2luZS5tYXJ0aW4ifQ.dummysignature5"
		},
		{
			id: 6,
			username: 'camille.durand',
			password: 'mypassword',
			role: 1,
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsInVzZXJuYW1lIjoiY2FtaWxsZS5kdXJhbmQifQ.dummysignature6"
		},
		{
			id: 7,
			username: 'lucas.moireau',
			password: 'passw0rd',
			role: 1,
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsInVzZXJuYW1lIjoibHVjYXMubW9pcmVhdSJ9.dummysignature7"
		},
		{
			id: 8,
			username: 'sophie.bernard',
			password: 's0phie123',
			role: 1,
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsInVzZXJuYW1lIjoic29paGllLmJlcm5hcmQifQ.dummysignature8"
		},
		{
			id: 9,
			username: 'paul.leclerc',
			password: 'paulpass',
			role: 1,
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjl9.dummysignature9"
		},
		{
			id: 11,
			username: 'admin',
			password: 'adminpass',
			role: 10,
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJ1c2VyIjoiYWRtaW4ifQ.dummysignatureadmin"
		}
	];

	constructor(private call: CallService, public router: Router, public competitionService: CompetitionService, public location: Location) { }

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

		this.id = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;

		this.user.push({
			id: this.id,
			username: this.username,
			role: this.role
		});

		const userGroup = this.competitionService.users.find(competition => competition.id === competitionId);
		if (userGroup) {
			userGroup.users.push(this.id);
		}

		this.users.push({
			id: this.id,
			username: this.username,
			password: "",
			role: this.role,
			token: ""
		});

		console.log("User added:", this.user);

		this.router.navigate(['/competition', competitionId]);

		return true;
	}

	delete(id: number): boolean {
		if (confirm("Etes-vous sûr de vouloir supprimer cet utilisateur ?")) {
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

			this.users = this.users.filter(u => u.id !== id);

			this.competitionService.users.forEach(competition => {
				competition.users = competition.users.filter(userId => userId !== id);
			});

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

		this.location.back();

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
