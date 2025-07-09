import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChallengeService } from '../../../../services/competitions/challenge/challenge.service';
import { FormatService } from '../../../../services/utils/format.service';

@Component({
	selector: 'tile-challenge',
	imports: [CommonModule, RouterModule],
	templateUrl: './challenge.component.html',
	styleUrl: './challenge.component.css'
})

export class ChallengeComponent {
	@Input() challenge: any;

	constructor(public challengeService: ChallengeService, public formatService: FormatService) { }
}
