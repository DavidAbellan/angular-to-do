import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string, ...args: any[]): any {
    let value = new Date(date);
    return ` ${value.getMonth()} `;
  }

}
