import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetitionComponent } from './edit.competition.component';

describe('AddCompetitionComponent', () => {
	let component: EditCompetitionComponent;
	let fixture: ComponentFixture<EditCompetitionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EditCompetitionComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(EditCompetitionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
