import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatSize'
})

export class FormatSizePipe implements PipeTransform {
    transform(sizeInBytes: number, isLongTitle: boolean): any {
        const units = isLongTitle ?
                      ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes'] :
                      ['B', 'Kb', 'Mb', 'Gb'];

        let power = Math.round(Math.log(sizeInBytes)/Math.log(1024));
        power = Math.min(power, units.length - 1);

        const size = sizeInBytes / Math.pow(1024, power);
        const formattedSize = Math.round(size*100)/100;

        const unit = units[power];

        return `${formattedSize} ${unit}`;
    }
}