import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CallService } from '../../utils/call.service';

export interface Challenge {
	name: string,
	description: string,
	tools: Array<string>
	level: number,
	competitionId: number
}

@Injectable({
	providedIn: 'root'
})

export class ChallengeService {
	challenge: Challenge[] = [];

	name: string = "";
	description: string = "";
	tools: Array<string> = [];
	level: number = 0;

	challenges = [
		{
			id: 1,
			name: 'Challenge de voltige',
			description: 'Epreuve de voltige.',
			tools: ["bandeau", "tapis", "cheval"],
			level: 1,
		},
		{
			id: 2,
			name: 'Challenge de saut d\'obstacles',
			description: 'Course de saut d\'obstacles pour les cavaliers',
			tools: ["barres", "poutre", "cheval"],
			level: 2,
		},
		{
			id: 3,
			name: 'Challenge de dressage',
			description: 'Démonstration de dressage pour les cavaliers',
			tools: ["carré", "lettres", "cheval"],
			level: 3,
		},
		{
			id: 4,
			name: 'Challenge de cross',
			description: 'Parcours de cross',
			tools: ["obstacles", "parcours", "cheval"],
			level: 2,
		},
		{
			id: 5,
			name: 'Challenge de pony-games',
			description: 'Jeux de poney pour les enfants et les cavaliers débutants',
			tools: ["jeux", "poney", "équipe"],
			level: 4,
		}
	];

	constructor(public call: CallService, public router: Router) { }

	add(competitionId: number): boolean {
		try {
			this.call.callApi(
				"challenge/add",
				"post",
				{
					"id": competitionId,
					"name": this.name,
					"description": this.description,
					"tools": this.tools,
					"level": this.level
				}
			)
			.subscribe(response => {
				return true;
			}, error => {
				console.error(error);

				return false;
			});
		} catch (error) {
			console.error("Error adding challenge:", error);
		}

		this.challenge.push({
			name: this.name,
			description: this.description,
			tools: this.tools,
			level: this.level,
			competitionId: competitionId
		});

		console.log("Challenge added:", this.challenge);

		this.router.navigate(['/competition', competitionId]);

		return true;
	}

	delete(id: number): boolean {
		if (confirm("Etes-vous sûr de vouloir supprimer cette épreuve ?")) {
			try {
				this.call.callApi("challenge/delete/" + id, "delete", { })
				.subscribe(response => {
					return true;
				}, error => {
					console.error(error);

					return false;
				});
			} catch (error) {
				console.error("Error deleting challenge:", error);
			}

			this.challenges = this.challenges.filter(challenge => challenge.id !== id);

			console.log("Challenge deleted:", id);

			return true;
		} else {
			return false;
		}
	}

	update(id: number): boolean {
		try {
			this.call.callApi(
				"challenge/update",
				"post",
				{
					"id": id,
					"name": this.name,
					"description": this.description,
					"tools": this.tools,
					"level": this.level
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

		const index = this.challenges.findIndex(challenge => challenge.id === id);

		this.challenges[index].name = this.name;
		this.challenges[index].description = this.description;
		this.challenges[index].tools = this.tools;
		this.challenges[index].level = this.level;

		console.log("Challenge updated:", this.challenges[index]);

		this.router.navigate(["/"]);

		return true;
	}

	getInfos(id: number): any {
		try {
			this.call.callApi("challenge/infos/" + id, "get", {})
			.subscribe(response => {
				// return response.data;
			}, error => {
				console.error(error);

				// return false;
			});
		} catch (error) {
			console.error("Error fetching competition info:", error);
		}

		return this.challenges.find(challenge => challenge.id === id) || {
			id: 0,
			name: "Challenge inconnu",
			description: "Aucune description disponible",
			tools: []
		};
	}
}
