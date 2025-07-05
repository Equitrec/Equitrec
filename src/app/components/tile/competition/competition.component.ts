import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompetitionService } from '../../../services/competitions/competition.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/users/user.service';

@Component({
	selector: 'tile-competition',
	imports: [RouterModule, CommonModule],
	styleUrl: './competition.component.css',
	template: `
		<div class="tile competition_container">
			<div class="title_blur_container"></div>
			<img src="competition.png" />
			<h1>{{ this.competition.name }}</h1>

			<div class="content_container">
				<div class="content">
					<label>Organisateur</label>
					<p>{{ userService.getInfos(this.competition.organizer).username }}</p>
				</div>
				<div class="content">
					<label>Participants</label>
					<p>{{ competitonService.getUsers(competition.id).length }}</p>
				</div>
				<div class="content">
					<label>Début</label>
					<p>{{ this.competition.startDate | date:'dd/MM/yyyy HH:mm' }}</p>
				</div>
				<div class="content">
					<label>Fin</label>
					<p>{{ this.competition.endDate | date:'dd/MM/yyyy HH:mm'  }}</p>
				</div>
				<div class="content">
					<label>État</label>
					<p>{{ this.competition.status }}</p>
				</div>
				<div class="content">
					<label>Lieu</label>
					<p>{{ this.competition.location }}</p>
				</div>
			</div>
		</div>
	`
})

export class CompetitionComponent {
	@Input() competition: any;

	constructor(public competitonService: CompetitionService, public userService: UserService) { }
}
