import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'urlSafer'
})
export class UrlSaferPipe implements PipeTransform {

    constructor(private _domSanitizer: DomSanitizer) {
    }

    transform(value: string, url: string): SafeResourceUrl {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    }

}
