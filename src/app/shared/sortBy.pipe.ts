import { Pipe, PipeTransform } from "@angular/core";
import {IUsers} from './interfaces';

@Pipe({
  name: "sort",
  pure: false
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: Array<IUsers>, args: string): Array<IUsers> {
    array.sort((a: any, b: any) => {
      if (a.first_name < b.first_name) {
        return -1;
      } else if (a.first_name > b.first_name) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
