import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { UrlSerializer } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { 
  DxDataGridModule, DxContextMenuModule, DxPopupModule, DxTabsModule, DxFormModule, DxDateBoxModule,
  DxTextBoxModule, DxSelectBoxModule, DxButtonModule, DxTooltipModule } from 'devextreme-angular';

// Core
import { LowerCaseUrlSerializer } from './core/utilities/lower-case-url-serializer';
// Rutas
import { APP_ROUTING } from './app.routes';
// Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UrlSaferPipe } from './pipes/url-safer.pipe';
import { StatusEnumPipe } from './pipes/status-enum.pipe';
import { TimeToStringPipe } from './pipes/time-to-string.pipe';
import { SafeHtmlPipe } from './pipes/safeHtml.pipes';
// Servicios
import { AuthenticatedHttpService } from './services/authenticated-http.service';
import { LocalStorageService } from './services/local-storage.service';
import { GetAppSettingService } from './services/get-app-setting.service';
import { ConfigService } from './services/config.service';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
// Componentes
import { AppComponent } from './app.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';
import { InfoProfileComponent } from './components/info-profile/info-profile.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabPanelComponent,
    ProfileComponent,
    InfoProfileComponent,
    PersonalInfoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    APP_ROUTING,
    DxDataGridModule,
    DxContextMenuModule,
    DxPopupModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxTooltipModule,
    DxTabsModule,
    DxFormModule,
    DxDateBoxModule
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    },
    {
      provide: LOCALE_ID,
      useValue: "es-CO"
    },
    {
      provide: Http,
      useClass: AuthenticatedHttpService
    },
    ConfigService,
    GetAppSettingService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
