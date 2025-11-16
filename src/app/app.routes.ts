import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TemplateViewerComponent } from './components/template-viewer/template-viewer.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'viewer', component: TemplateViewerComponent },
  { path: '**', redirectTo: '' }
];
