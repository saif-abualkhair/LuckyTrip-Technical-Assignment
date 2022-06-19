import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationResolver } from './destination/destination.resolver';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'Destination/:id', resolve: {
      resolveData: DestinationResolver
    },
    loadChildren: () => import('./destination/destination.module').then(m => m.DestinationModule),
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'error-page', component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'error-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
