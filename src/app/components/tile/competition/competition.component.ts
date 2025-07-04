import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'tile-competition',
	imports: [RouterModule],
	styleUrl: './competition.component.css',
	template: `
		<a [routerLink]="['/competition', this.competition.id]">
			<div class="tile competition_container">
				<div class="title_blur_container"></div>
				<img src="competition.png" />
				<h1>{{ this.competition.name }}</h1>

				<div class="content">
					<p>AAAAAAAAAAA</p>
				</div>
			</div>
		</a>
	`
})

export class CompetitionComponent {
	@Input() competition: any;
}
