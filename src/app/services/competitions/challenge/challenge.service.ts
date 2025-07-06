import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Challenge {
	name: string,
	description: string,
	tools: Array<string>
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

	challenges = [
		{
			id: 1,
			name: 'Challenge de voltige',
			description: 'Epreuve de voltige.',
			tools: ["bandeau", "tapis", "cheval"],
		},
		{
			id: 2,
			name: 'Challenge de saut d\'obstacles',
			description: 'Course de saut d\'obstacles pour les cavaliers',
			tools: ["barres", "poutre", "cheval"],
		},
		{
			id: 3,
			name: 'Challenge de dressage',
			description: 'Démonstration de dressage pour les cavaliers',
			tools: ["carré", "lettres", "cheval"],
		},
		{
			id: 4,
			name: 'Challenge de cross',
			description: 'Parcours de cross',
			tools: ["obstacles", "parcours", "cheval"],
		},
		{
			id: 5,
			name: 'Challenge de pony-games',
			description: 'Jeux de poney pour les enfants et les cavaliers débutants',
			tools: ["jeux", "poney", "équipe"],
		}
	];

	constructor(public router: Router) { }

	add(competitionId: number): boolean {
		this.challenge.push({
			name: this.name,
			description: this.description,
			tools: this.tools,
			competitionId: competitionId
		});

		console.log("Challenge added:", this.challenge);

		this.router.navigate(['/competition', competitionId]);

		return true;
	}

	delete(id: number): boolean {
		this.challenges = this.challenges.filter(challenge => challenge.id !== id);

		console.log("Challenge deleted:", id);

		return true;
	}

	update(id: number): boolean {
		const index = this.challenges.findIndex(challenge => challenge.id === id);

		this.challenges[index].name = this.name;
		this.challenges[index].description = this.description;
		this.challenges[index].tools = this.tools;

		console.log("Challenge updated:", this.challenges[index]);

		this.router.navigate(["/"]);

		return true;
	}

	getInfos(id: number): any {
		// TODO
		return this.challenges.find(challenge => challenge.id === id) || {
			id: 0,
			name: "Challenge inconnu",
			description: "Aucune description disponible",
			tools: []
		};
	}
}
