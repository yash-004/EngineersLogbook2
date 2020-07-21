import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({name: 'daysAgo'})
export class DaysAgoPipe implements PipeTransform {

  transform(value: any): any {
    const today = dayjs();
    return today.diff(value,"day");
  }
}

/*
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'userExtract'})

export class UserExtractPipe implements PipeTransform {
 transform(value: any, arg): any {
    let newVal: any;
    if (arg === 'firstname') {
      newVal = value.name ? value.name.split(' ')[0] : '';
    } else if (arg === 'lastname') {
      newVal = value.name ? value.name.split(' ').splice(-1) : '';
    } else if (arg === 'age') {
      const currentTime = new Date();
      newVal = value.birthyear ? currentTime.getFullYear() - value.birthyear : 0;
    }
    return newVal;
  }
}
*/
