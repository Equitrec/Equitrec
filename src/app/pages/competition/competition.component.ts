import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompetitionService } from '../../services/competitions/competition.service';
import { CommonModule, Location } from '@angular/common';
import { UserService } from '../../services/users/user.service';
import { CompetitionComponent as CompetitionTileComponent } from "../../components/tile/competition/competition.component";
import { UserComponent } from '../../components/tile/competition/user/user.component';
import { ChallengeComponent } from "../../components/tile/competition/challenge/challenge.component";
import { ChallengeService } from '../../services/competitions/challenge/challenge.service';

@Component({
	selector: 'app-competition',
	imports: [RouterModule, CommonModule, CompetitionTileComponent, UserComponent, ChallengeComponent],
	templateUrl: './competition.component.html',
	styleUrl: './competition.component.css'
})

export class CompetitionComponent {
	competitionId: number = 0;
	competitions: any[];
	users: any[];
	challenges: any[];
	userInfos: any[] = [];
	challengeInfos: any[] = [];

	constructor(
		public competitionService: CompetitionService,
		public userService: UserService,
		public challengeService: ChallengeService,
		private route: ActivatedRoute,
		public location: Location
	) {
		this.competitionId = Number(this.route.snapshot.paramMap.get('id'));
		this.competitions = competitionService.getCompetitions();
		this.users = competitionService.getUsers(this.competitionId);
		this.challenges = competitionService.getInfos(this.competitionId).challenges;

		this.loadUserInfos();
		this.loadChallengeInfos();
	}

	private loadUserInfos(): void {
		this.userInfos = this.users.map(user => this.userService.getInfos(user));
	}

	private loadChallengeInfos(): void {
		this.challengeInfos = this.challenges.map(challenge => this.challengeService.getInfos(challenge));
	}
}
