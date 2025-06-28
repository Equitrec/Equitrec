import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompetitionService } from '../../services/competitions/competition.service';
import { Location, NgFor } from '@angular/common';
import { UserService } from '../../services/users/user.service';

@Component({
	selector: 'app-competition',
	imports: [RouterModule, NgFor],
	templateUrl: './competition.component.html',
	styleUrl: './competition.component.css'
})

export class CompetitionComponent {
	competitionId: number = 0;

	constructor(
		public competitonService: CompetitionService,
		public userService: UserService,
		private route: ActivatedRoute,
		public location: Location
	) {
		this.competitionId = Number(this.route.snapshot.paramMap.get('id'));
	}
}
