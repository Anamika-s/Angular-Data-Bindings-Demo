import {Component, ComponentFactoryResolver } from '@angular/core';
 

@Component({
   selector:'second-app',
  //  template: '<h1> This is Second Component',
  templateUrl: './second-comp.html',
   styles:[ `h1 
  {
  background-color:red;
  }
  div
  {
     border:1px solid red;
     width:100px;
     height:100px;
     display:inline-block;
  }`]
})
export class SecondComponent
{
  
   status : boolean=true;
   name: string="Deepak";
   image1 : string="/assets/images/htmlimage.png";
  method1()
  {
      return "Hello " + this.name;
  }
  call() 
  {
     console.log("Method is called");
  }
  onDivClick()
  {
     console.log("Div is clicked");
  }

  onSave(event:any)
  {  event.stopPropagation(); 
     console.log("Save is called");
  }
onKeyPress(event:any)
{
   // console.log(event);
   if(event.keyCode==13)
   {
      console.log("You hev apressed enter key");
      console.log(event);
      console.log(event.target);
      console.log(event.target.value);
   }


}

}