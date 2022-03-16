import { Component } from "@angular/core";

@Component
({
   selector:'dir-app',
   templateUrl:'./directive1-comp.html'
})
export class Directive1Component
{
   image1 : string="/assets/images/image.png";
   // rec=[];}

rec=[
{name:'Ajay', marks:90, img:this.image1 },
{name:'Depak', marks:90, img:this.image1 },
{name:'Sagar', marks:90, img:this.image1 },
{name:'Harpreet', marks:90, img:this.image1} 
];
}
 