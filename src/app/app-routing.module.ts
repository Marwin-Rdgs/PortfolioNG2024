import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectComponentComponent } from './all-project-component/all-project-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  { path: 'allProjects', component: AllProjectComponentComponent},
  { path: '', component: HomeComponentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
