import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompetitionService } from '../../services/competitions/competition.service';
import { Location, NgFor } from '@angular/common';
import { UserService } from '../../services/users/user.service';
import { CompetitionComponent as CompetitionTileComponent } from "../../components/tile/competition/competition.component";
import { UserComponent } from '../../components/tile/competition/user/user.component';
import { ChallengeComponent } from "../../components/tile/competition/challenge/challenge.component";
import { ChallengeService } from '../../services/competitions/challenge/challenge.service';

@Component({
	selector: 'app-competition',
	imports: [RouterModule, NgFor, CompetitionTileComponent, UserComponent, ChallengeComponent],
	templateUrl: './competition.component.html',
	styleUrl: './competition.component.css'
})

export class CompetitionComponent {
	competitionId: number = 0;

	constructor(
		public competitonService: CompetitionService,
		public userService: UserService,
		public challengeService: ChallengeService,
		private route: ActivatedRoute,
		public location: Location
	) {
		this.competitionId = Number(this.route.snapshot.paramMap.get('id'));
	}
}
