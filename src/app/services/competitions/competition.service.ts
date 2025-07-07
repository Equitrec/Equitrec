import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CallService } from '../utils/call.service';
import { BehaviorSubject } from 'rxjs';

export interface Competition {
	name: string,
	dateStart: number,
	dateEnd: number,
	user: number,
	status: number,
	location: string
}

@Injectable({
	providedIn: 'root'
})

export class CompetitionService {
	competition: Competition[] = [];

	name: string = "";
	dateStart: number = 0;
	dateEnd: number = 0;
	user: number = 0;
	status: number = 0;
	location: string = "";

	compet = [
		{
			id: 1,
			name: 'VoltigeChampionats de france amateur',
			description: 'Description for Competition 1',
			organizer: 1,
			dateStart: new Date('2025-01-01 00:00:00'),
			dateEnd: new Date('2025-01-31 23:59:59'),
			status: 1,
			location: 'Boulerie master',
			challenges: [
				1,
				5,
				3
			]
		},
		{
			id: 2,
			name: 'Boulerie master dressage',
			description: 'Description for Competition 2',
			organizer: 3,
			dateStart: new Date('2025-02-01 00:00:00'),
			dateEnd: new Date('2025-02-28 23:59:59'),
			status: 0,
			location: 'Zoom master - Grand Théâtre',
			challenges: [
				2,
				3,
				4,
				5,
				1
			]
		},
		{
			id: 3,
			name: 'Dressage boulerie festival & finales france dressage',
			description: 'Description for Competition 3',
			organizer: 2,
			dateStart: new Date('2025-03-01 00:00:00'),
			dateEnd: new Date('2025-03-31 23:59:59'),
			status: 3,
			location: 'Angers',
			challenges: [
				3
			]
		}
	];

	constructor(public call: CallService, public router: Router) { }

	add(): boolean {
		try {
			this.call.callApi(
				"competition/add",
				"post",
				{
					"name": this.name,
					"dateStart": this.dateStart,
					"dateEnd": this.dateEnd,
					"user": this.user,
					"status": this.status,
					"location": this.location
				}
			)
			.subscribe(response => {
				// return true;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error adding competition:", error);
		}

		this.competition.push({
			name: this.name,
			dateStart: this.dateStart,
			dateEnd: this.dateEnd,
			user: this.user,
			status: this.status,
			location: this.location
		});

		console.log("Competition added:", this.competition);

		this.router.navigate(['/']);

		return true;
	}

	delete(id: number): boolean {
		try {
			this.call.callApi("competition/delete", "delete", { "id": id + "" })
			.subscribe(response => {
				// return true;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error deleting competition:", error);
		}

		if (confirm("Etes-vous sûr de vouloir supprimer cette compétition ?")) {
			this.compet = this.compet.filter(c => c.id !== id);

			console.log("Competition deleted:", id);

			this.router.navigate(['/']);

			return true;
		} else {
			return false;
		}
	}

	update(id: number): boolean {
		try {
			this.call.callApi(
				"competition/update",
				"post",
				{
					"id": id,
					"name": this.name,
					"dateStart": this.dateStart,
					"dateEnd": this.dateEnd,
					"location": this.location
				}
			)
			.subscribe(response => {
				// return true;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error updating competition:", error);
		}

		const index = this.compet.findIndex(c => c.id === id);

		this.compet[index].name = this.name;
		this.compet[index].dateStart = new Date(this.dateStart);
		this.compet[index].dateEnd = new Date(this.dateEnd);
		this.compet[index].location = this.location;

		console.log("Competition updated:", this.compet[index]);

		this.router.navigate(["/"]);

		return true;
	}

	getCompetitions(): any[] {
		try {
			this.call.callApi("competitions", "get", {})
			.subscribe(response => {
				// return response.data;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error fetching competitions:", error);
		}

		return this.compet.map(c => c.id);
	}

	getInfos(id: number): any {
		try {
			this.call.callApi("competition/infos/" + id, "get", {})
			.subscribe(response => {
				// return response.data;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error fetching competition info:", error);
		}

		return this.compet.find(c => c.id === id) || {
			id: 0,
			name: "Compétition inconnue",
			description: "Aucune description disponible",
			organizer: 0,
			dateStart: new Date(),
			dateEnd: new Date(),
			status: "Inconnu",
			location: "inconnu",
			challenges: []
		};
	}

	getUsers(id: number): any[] {
		try {
			this.call.callApi("competition/" + id + "/users", "get", {})
			.subscribe(response => {
				// return response.data;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error fetching competition users:", error);
		}

		const users = [
			{
				id: 1,
				users: [1, 5]
			},
			{
				id: 2,
				users: [4, 3, 9, 8, 7, 1]
			},
			{
				id: 3,
				users: [6, 2]
			}
		]

		return users.find(c => c.id === id)?.users || [];
	}
}
