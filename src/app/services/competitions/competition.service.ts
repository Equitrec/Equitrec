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
		return [1, 2, 3];
	}

	getInfos(id: number): any {
		// TODO
		const compet = [
			{
				id: 1,
				name: 'VoltigeChampionats de france amateur',
				description: 'Description for Competition 1',
				organizer: 1,
				startDate: new Date('2025-01-01 00:00:00'),
				endDate: new Date('2025-01-31 23:59:59'),
				status: 'active',
				location: 'Boulerie master',
				challenges: [
					1,
					7,
					32
				]
			},
			{
				id: 2,
				name: 'Boulerie master dressage',
				description: 'Description for Competition 2',
				organizer: 3,
				startDate: new Date('2025-02-01 00:00:00'),
				endDate: new Date('2025-02-28 23:59:59'),
				status: 'inactive',
				location: 'Zoom master - Grand Théâtre',
				challenges: [
					2,
					3,
					4,
					5
				]
			},
			{
				id: 3,
				name: 'Dressage boulerie festival & finales france dressage',
				description: 'Description for Competition 3',
				organizer: 2,
				startDate: new Date('2025-03-01 00:00:00'),
				endDate: new Date('2025-03-31 23:59:59'),
				status: 'progress',
				location: 'Angers',
				challenges: [
					6
				]
			}
		]

		return compet.find(c => c.id === id) || {
			id: 0,
			name: "Unknown Competition",
			description: "No description available",
			organizer: 0,
			startDate: new Date(),
			endDate: new Date(),
			status: "unknown",
			location: "unknown",
			challenges: []
		};
	}

	getUsers(id: number): any[] {
		// TODO
		const users = [
			{
				id: 1,
				users: [4, 5]
			},
			{
				id: 2,
				users: [4, 8, 9]
			},
			{
				id: 3,
				users: [6, 4]
			}
		]

		return users.find(c => c.id === id)?.users || [];
	}
}
