import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ConfigService } from './config.service';

@Injectable()
export class GetAppSettingService implements CanActivate {
        
    constructor(private _configService: ConfigService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._configService.getAppSettings().then(() => {
            return true
        });
    }
}
