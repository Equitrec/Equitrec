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
}
