import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompetitionService } from '../../../services/competitions/competition.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/users/user.service';

@Component({
	selector: 'tile-competition',
	imports: [RouterModule, CommonModule],
	styleUrl: './competition.component.css',
	templateUrl: './competition.component.html'
})

export class CompetitionComponent {
	competitionId: number = 0;

	@Input() competition: any;

	constructor(
		public competitonService: CompetitionService,
		public userService: UserService,
		public route: ActivatedRoute
	) {
		this.competitionId = Number(this.route.snapshot.paramMap.get('id'));
	}

	deleteCompetition(event: Event, competitionId: number): void {
		event.preventDefault();
		event.stopPropagation();

		this.competitonService.delete(competitionId);
	}
}
