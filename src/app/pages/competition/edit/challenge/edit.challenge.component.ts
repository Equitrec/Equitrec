import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChallengeService } from '../../../../services/competitions/challenge/challenge.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-edit-challenge',
	imports: [FormsModule, RouterModule],
	templateUrl: './edit.challenge.component.html'
})

export class EditChallengeComponent {
	challengeId: number = 0;

	constructor(
		public challengeService: ChallengeService,
		private route: ActivatedRoute,
		public location: Location
	) {
		this.challengeId = Number(this.route.snapshot.paramMap.get('id'));

		let challengeInfo = this.challengeService.getInfos(this.challengeId);

		this.challengeService.name = challengeInfo.name;
		this.challengeService.description = challengeInfo.description;
		this.challengeService.tools = challengeInfo.tools;
		this.challengeService.level = challengeInfo.level
	}
}
