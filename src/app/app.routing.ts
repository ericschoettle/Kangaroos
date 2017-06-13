import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { JackComponent } from './jack/jack.component';
import { JillComponent } from './jill/jill.component';
import { JoeyComponent } from './joey/joey.component';


const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
  path: 'Jack',
  component: JackComponent
  },
  {
  path: 'Jill',
  component: JillComponent
  },
  {
  path: 'Joey',
  component: JoeyComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
