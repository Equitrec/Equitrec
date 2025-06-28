import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { CreateComponent } from './create/create.component';
import { CompetitionComponent } from './competition/competition.component';
import { GuardService } from './services/guards/guard.service';
import { LoginGuardService } from './services/guards/loginguard.service';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [GuardService]
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [LoginGuardService]
	},
	{
		path: 'users',
		component: UsersComponent,
		canActivate: [GuardService]
	},
	{
		path: 'create',
		component: CreateComponent,
		canActivate: [GuardService]
	},
	{
		path: 'competition',
		component: CompetitionComponent,
		canActivate: [GuardService]
	}
];
