import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
   myProp:Boolean =false;
   myProp2:string="15px";
   isActive:Boolean=true;
   multiClasses =
   {
     class1:true,
     class2:true,
     class3:true
   }
   multiStyles=
   {
    'background-color':'red',
    'border':'10px solid yellow'
   }
   onClick(event:any)
   {
     console.log("You have selected :"  + event.target.value);
   }
}
