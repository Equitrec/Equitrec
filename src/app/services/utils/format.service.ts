import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class FormatService {
	constructor() { }

	formatRole(role: number): string {
		switch (role) {
			case 1:
				return "Cavalier";
			case 2:
				return "Juge";
			case 10:
				return "Administrateur";
			default:
				return "Inconnu";
		}
	}

	formatStatus(status: number): string {
		switch (status) {
			case 0:
				return "Inactif";
			case 1:
				return "Actif";
			case 2:
				return "En attente";
			default:
				return "Inconnu";
		}
	}

	formatLevel(level: number): string {
		switch (level) {
			case 1:
				return "Débutant";
			case 2:
				return "Intermédiaire";
			case 3:
				return "Confirmé";
			case 4:
				return "Expert";
			default:
				return "Inconnu";
		}
	}
}
