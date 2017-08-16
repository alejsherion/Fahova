import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { UrlSerializer } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { 
  DxDataGridModule, DxContextMenuModule, DxPopupModule, 
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
// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QBEComponent } from './components/qbe/qbe.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QBEComponent,
    ToolBarComponent
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
    DxTooltipModule
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
