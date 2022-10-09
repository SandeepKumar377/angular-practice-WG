import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  myClass={'success':true, 'height24':false,'fontSize':this.increeseFont()};

  name:string ='Sandeep Kumar';

  employees=['Jack','John','Rock'];
  employee={
    name:'Sandeep',
    age:25, 
    salary:25000
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
