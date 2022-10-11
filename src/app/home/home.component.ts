import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  switchTest:number=3;

  myClass={'success':true, 'height24':false,'fontSize':this.increeseFont()};
  src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80';
  width=200;
  name:string ='Sandeep Kumar';
  styleBind="color:red;font-style:italic";

  employees=['Jack','John','Rock'];
  employee={
    name:'Sandeep',
    age:25, 
    salary:25000
  }
  employeesList=[{
    name:'Sandeep',
    age:25, 
    salary:25000
  },
  {
    name:'Sandy',
    age:24, 
    salary:22000
  },
  {
    name:'San',
    age:23, 
    salary:32000
  }
]
refresh():void{
  this.employeesList=[{
    name:'Sandeep',
    age:25, 
    salary:25000
  },
  {
    name:'Sandy',
    age:24, 
    salary:22000
  },
  {
    name:'San',
    age:23, 
    salary:32000
  },
  {
    name:'Sanjay',
    age:21, 
    salary:39000
  }
]
}
refreshEmloyees(index:number, employee:any):string{
return employee.name;
}
  increeseFont():boolean{
    return true;
  }

  clickSave(){
    alert("This is click event!");
  }
  mouseOver(){
    this.name='Sandeep Kumar update';
  }
  changeEvent(){
    this.name='change event!';
  }
  keyDownEvent(){
    this.name='Key Down Event!';
  }
  focusEvent(){
    this.name='Focus Event!';
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
