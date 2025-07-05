import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'tile-challenge',
	imports: [NgFor, NgIf, CommonModule],
	templateUrl: './challenge.component.html',
	styleUrl: './challenge.component.css'
})

export class ChallengeComponent {
	@Input() challenge: any;
}
