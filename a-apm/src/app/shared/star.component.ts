import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 5;
    cropWidth: number = 75;
    @Output() ratingEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnChanges(): void {
        this.cropWidth = this.rating * (75 / 5);
    }

    onClick(): void {
        this.ratingEvent.emit(`The rating ${this.rating} has been clicked!`);
    }
}