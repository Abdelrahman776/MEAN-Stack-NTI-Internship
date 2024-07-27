import { Component } from '@angular/core';
import { resolve } from 'path';

@Component({
  selector: 'app-usingpipes',
  templateUrl: './usingpipes.component.html',
  styleUrl: './usingpipes.component.css'
})
export class UsingpipesComponent {
  title = "hello from angular"
  mydate = new Date();

  grade = 223 / 150
  price = 4545.56
  
  myData = new Promise((res) => {
    
    setTimeout(() => res("data from request Abdooo")
      , 3000);
  });
  
}
