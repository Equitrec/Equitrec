import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class ChallengeService {
	constructor() { }

	getInfos(id: number): any {
		// TODO
		const challenges = [
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

		return challenges.find(challenge => challenge.id === id) || {
			id: 0,
			name: 'Challenge inconnu',
			description: 'Aucune information disponible pour ce challenge.',
			tools: ["Aucun outil disponible"]
		};
	}
}
