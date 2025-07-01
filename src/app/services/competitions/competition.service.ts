import { Injectable } from '@angular/core';

export interface Competition {
	name: string,
	dateStart: number,
	dateEnd: number,
	user: string,
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
	user: string = "";
	status: number = 0;
	location: string = "";

	constructor() { }

	add() {
		this.competition.push({
			name: this.name,
			dateStart: this.dateStart,
			dateEnd: this.dateEnd,
			user: this.user,
			status: this.status,
			location: this.location
		});

		console.log("Competition added:", this.competition);

		return true;
	}

	getCompetitions(): any[] {
		// TODO
		return [
			{
				id: 1,
				name: 'Competition 1',
				description: 'Description for Competition 1',
				startDate: new Date('2025-01-01'),
				endDate: new Date('2025-01-31'),
				status: 'active',
				challenges: [
					1,
					7,
					32
				]
			},
			{
				id: 2,
				name: 'Competition 2',
				description: 'Description for Competition 2',
				startDate: new Date('2025-02-01'),
				endDate: new Date('2025-02-28'),
				status: 'inactive',
				challenges: [
					2,
					3,
					4,
					5
				]
			},
			{
				id: 3,
				name: 'Competition 3',
				description: 'Description for Competition 3',
				startDate: new Date('2025-03-01'),
				endDate: new Date('2025-03-31'),
				status: 'active',
				challenges: [
					6
				]
			}
		];
	}

	getUsers(id: number): any[] {
		// TODO
		return [1, 2, 3];
	}
}
