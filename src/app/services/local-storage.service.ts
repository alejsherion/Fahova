import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() { }

    public setItemValue(name: string, value: string): void {
        localStorage.setItem(name, value);
    }

    public setItemObject(name: string, obj: any): void {
        localStorage.setItem(name, JSON.stringify(obj));
    }

    public getItemValue(name: string): string {
        let result: string = localStorage.getItem(name);
        return (result == undefined || result == null) ? "" : result;
    }

    public itemExists(name: string): boolean {
        let result = localStorage.getItem(name);
        if (result == undefined || result == null)
            return false
        return true;
    }

    public getItemObject(name: string): any {
        let result = localStorage.getItem(name);
        return (result == undefined || result == null) ? null : JSON.parse(result);
    }

}
