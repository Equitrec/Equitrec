import { Component } from '@angular/core';
import { CompetitionService } from '../../../../services/competitions/competition.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-create-competition',
	imports: [FormsModule, RouterModule],
	templateUrl: './add.competition.component.html',
	styleUrl: './add.competition.component.css'
})

export class AddCompetitionComponent {
	competitionId: number = 0;

	constructor(
		public competionService: CompetitionService,
		private route: ActivatedRoute,
		public location: Location
	) {
		this.competitionId = Number(this.route.snapshot.paramMap.get('id'));
	}
}
