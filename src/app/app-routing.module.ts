import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './views/survey/survey.component';
import { HintsComponent } from './views/hints/hints.component';
import { ThanksComponent } from './views/thanks/thanks.component';
import { Error404Component } from './views/error404/error404.component';
import { MainComponent } from './layouts/main/main.component';
import { ResultsComponent } from './views/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HintsComponent },
      { path: 'questionario', component: SurveyComponent },
      { path: 'agradecimento', component: ThanksComponent },
      { path: '404', component: Error404Component },
      { path: 'resultados', component: ResultsComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
