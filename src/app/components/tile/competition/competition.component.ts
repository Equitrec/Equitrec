import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompetitionService } from '../../../services/competitions/competition.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/users/user.service';
import { FormatService } from '../../../services/utils/format.service';

@Component({
	selector: 'tile-competition',
	imports: [RouterModule, CommonModule],
	styleUrl: './competition.component.css',
	templateUrl: './competition.component.html'
})

export class CompetitionComponent implements OnInit {
	competitionId: number = 0;
	competitionInfos: any = [];
	username: string = "";
	usersCount: number = 0;

	@Input() competition: number = 0;

	constructor(
		public competitonService: CompetitionService,
		public userService: UserService,
		public route: ActivatedRoute,
		public formatService: FormatService
	) {
		this.competitionId = Number(this.route.snapshot.paramMap.get('id'));
	}

	ngOnInit(): void {
		this.competitionInfos = this.competitonService.getInfos(this.competition);
		this.username = this.userService.getInfos(this.competitionInfos.user).username;
		this.usersCount = this.competitonService.getUsers(this.competitionInfos.id).length;
	}

	deleteCompetition(event: Event, competitionId: number): void {
		event.preventDefault();
		event.stopPropagation();

		this.competitonService.delete(competitionId);
	}
}
