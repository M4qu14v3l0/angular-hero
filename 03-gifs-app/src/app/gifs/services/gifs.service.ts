import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

    private _tagsHistory: string[] = []

    get tagsHistory() {
        return [...this._tagsHistory]
    }

    public searchTag(tag: string): void {
        this._tagsHistory.unshift(tag)
    }




    constructor() { }

}