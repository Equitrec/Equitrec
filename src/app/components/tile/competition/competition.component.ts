import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompetitionService } from '../../../services/competitions/competition.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/users/user.service';

@Component({
	selector: 'tile-competition',
	imports: [RouterModule, CommonModule],
	styleUrl: './competition.component.css',
	templateUrl: './competition.component.html'
})

export class CompetitionComponent {
	@Input() competition: any;

	constructor(public competitonService: CompetitionService, public userService: UserService) { }
}
