import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: number, extension:string='MB'): string {
    return (value/(1024 * 1024)).toFixed(2) + extension
  }

}
