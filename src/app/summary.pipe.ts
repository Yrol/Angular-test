import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})

/**
 * Custom pipe to limit text with a dynamic limiter.
 */
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }

    let charLimit = limit ? limit : 50;

    return value.substr(0, charLimit) + '....';
  }
}
