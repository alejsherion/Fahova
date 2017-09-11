import { RouterModule, Routes } from '@angular/router';

//Páginas
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from "./pages/profile/profile.component";
//Servicios
import { GetAppSettingService } from './services/get-app-setting.service';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [GetAppSettingService] },
  { path: 'profile', component: ProfileComponent, canActivate: [GetAppSettingService] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];                                                                                        

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });