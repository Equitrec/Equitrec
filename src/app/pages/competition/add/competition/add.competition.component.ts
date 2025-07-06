import { Component } from '@angular/core';
import { CompetitionService } from '../../../../services/competitions/competition.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-create-competition',
	imports: [FormsModule, RouterModule],
	templateUrl: './add.competition.component.html'
})

export class AddCompetitionComponent {
	competitionId: number = 0;

	constructor(
		public competionService: CompetitionService,
		public location: Location
	) {
		this.competionService.name = '';
		this.competionService.dateStart = 0;
		this.competionService.dateEnd = 0;
		this.competionService.location = '';
	}
}
