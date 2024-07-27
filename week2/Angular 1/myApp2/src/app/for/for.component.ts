import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  names = ['ali', 'Omar', 'ahmed', "amira"]
  
  mycourse: tech[] = [
    { id: 0, name: 'mongoDb', desc: "database engine", imgURL: 'm.png' , isActive:false},
    { id: 1, name: 'express', desc: "API framework", imgURL: 'e.png' , isActive:true},
    { id: 2, name: 'Angular ', desc: "front end", imgURL: 'a.png' , isActive:true},
    { id: 3, name: 'NODEjs', desc: "back end", imgURL: 'n.png' , isActive:true},
  ]

  delete(id: number) {
    this.mycourse = this.mycourse.filter(course=>course.id!==id)
  }


  // change(id: nu--
}
interface tech {
  id: number;
  name: string;
  desc: string;
  imgURL: string;
  isActive: boolean;
}