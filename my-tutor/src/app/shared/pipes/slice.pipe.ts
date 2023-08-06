import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'slice'
})
export class SlicePipe implements PipeTransform {
    transform(value: string, limit:number ) {
        return `${value.substring(0, limit)}${value.length > limit ? '...' : ''}`;
    }
}