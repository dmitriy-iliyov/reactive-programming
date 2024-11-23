import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
    name: 'join',
    pure: false
})
export class JoinPipe implements PipeTransform{

    transform(array: any, start?: any, end?: any): any {
        if(start!==undefined){
            if(end!==undefined)
                return array.slice(start,end).join(",")
            return array.slice(start,array.length).join(",")
        }
        return array.join(",")
    }
}