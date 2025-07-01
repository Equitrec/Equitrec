import { Component } from '@angular/core';
import { CompetitionService } from '../../../services/competitions/competition.service';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-create',
	imports: [FormsModule],
	templateUrl: './add.component.html',
	styleUrl: './add.component.css'
})

export class AddComponent {
	constructor(public competionService: CompetitionService) { }
}
