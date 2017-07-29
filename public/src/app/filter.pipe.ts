import { Pipe, PipeTransform } from '@angular/core';
import { Poll } from "./poll";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Poll>, filter_poll: string): Array<Poll> {
    if(!value){ return value }
    return value.filter(
      poll => {
        console.log("in search: ", poll)
        return poll.userId.toLocaleLowerCase().includes(filter_poll.toLocaleLowerCase()) || poll.Question.toLocaleLowerCase().includes(filter_poll.toLocaleLowerCase()) 
      }
    );
  }

}
