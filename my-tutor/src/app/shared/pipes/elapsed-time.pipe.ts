import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'elapsedTime'
})

export class ElapsedTimePipe implements PipeTransform{

    transform(date: string, ...args: any[]) {
        return moment(date).fromNow();
    }
}