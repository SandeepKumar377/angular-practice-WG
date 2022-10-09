import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name:string ='Sandeep Kumar';

  employees=['Jack','John','Rock'];
  employee={
    name:'Sandeep',
    age:25, 
    salary:25000
  }

  getName(data:number):string{
    if (data===1) {
      return 'Hello from data 1';
    }
    else{      
      return 'Hello from data else';
    }
  }


}
