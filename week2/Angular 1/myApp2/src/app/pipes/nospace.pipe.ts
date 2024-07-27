import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

  name:'nospace'  
})


export class nospace implements PipeTransform{

  transform(value :string) {
    return value.replace(/\s+/g, '')
  }
}