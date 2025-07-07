import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompetitionService } from '../../services/competitions/competition.service';
import { NgFor } from '@angular/common';
import { CompetitionComponent } from '../../components/tile/competition/competition.component';

@Component({
	selector: 'app-home',
	imports: [RouterModule, NgFor, CompetitionComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})

export class HomeComponent {
	competitions: any[];

	constructor(public competitionService: CompetitionService) {
		this.competitions = competitionService.getCompetitions();
	}
}
