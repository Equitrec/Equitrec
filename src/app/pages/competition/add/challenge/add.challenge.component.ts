import { Component } from '@angular/core';
import { CompetitionService } from '../../../../services/competitions/competition.service';
import { FormsModule } from '@angular/forms';
import { ChallengeService } from '../../../../services/competitions/challenge/challenge.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-create-challenge',
	imports: [FormsModule, RouterModule],
	templateUrl: './add.challenge.component.html',
	styleUrl: './add.challenge.component.css'
})

export class AddChallengeComponent {
	competitionId: number = 0;

	constructor(
		public challengeService: ChallengeService,
		private route: ActivatedRoute,
		public location: Location
	) {
		this.competitionId = Number(this.route.snapshot.paramMap.get('id'));
	}
}
