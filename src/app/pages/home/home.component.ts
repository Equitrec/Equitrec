import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompetitionService } from '../../services/competitions/competition.service';
import { NgFor } from '@angular/common';

@Component({
	selector: 'app-home',
	imports: [RouterModule, NgFor],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})

export class HomeComponent {
	constructor(public competitonService: CompetitionService) { }
}
