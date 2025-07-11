import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionComponent } from './competition.component';

describe('CompetitionComponent', () => {
	let component: CompetitionComponent;
	let fixture: ComponentFixture<CompetitionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CompetitionComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(CompetitionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
