import { Component } from '@angular/core';
import { CompetitionService } from '../../../../services/competitions/competition.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
	selector: 'app-edit-competition',
	imports: [FormsModule, RouterModule, CommonModule],
	templateUrl: './edit.competition.component.html'
})

export class EditCompetitionComponent {
	competitionId: number = 0;

	constructor(
		public competionService: CompetitionService,
		private route: ActivatedRoute,
		public location: Location
	) {
		this.competitionId = Number(this.route.snapshot.paramMap.get('id'));

		let competitionInfo = this.competionService.getInfos(this.competitionId);

		this.competionService.name = competitionInfo.name;
		this.competionService.dateStart = competitionInfo.dateStart.toISOString().substring(0, competitionInfo.dateStart.toISOString().length - 1);
		this.competionService.dateEnd = competitionInfo.dateEnd.toISOString().substring(0, competitionInfo.dateEnd.toISOString().length - 1);
		this.competionService.location = competitionInfo.location;
	}
}
