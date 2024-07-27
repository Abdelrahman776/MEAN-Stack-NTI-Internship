import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  // template: '<h1>from ts file</h1>',
  styleUrl: './first.component.css',
  // styles: 'h1{color:blue}'
})
export class FirstComponent {
  msg = 'jjjjj';
  mydata = 'dataaaaa';

  setmsg() {
    return 'this message';
  }
  imageURL = 'a.png';
  image2URL = 'm.png';

  do() {
    // console.log('from buttonn');
    // this.msg = 'hello form button';
    // this.mydata = 'haha';
    this.isactive = !this.isactive;
    // console.log(this.isactive)
    // this.fontSize='55px'
  }
  isactive = true;
  fontSize='20px'
}


