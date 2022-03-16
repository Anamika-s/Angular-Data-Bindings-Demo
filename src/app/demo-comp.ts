import { toTypeScript } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:'demo-app',
    // template: '<h1> Hello </h1>'
    templateUrl :'./demo-comp.html' 
  }
)
export class DemoComponent
{
name:string ="Ajay";

isDisabled : Boolean= true;

Status1:string ="Online"
Status2:string ="Offline";

Call(element:any)
{
  // console.log(element.name);
  console.log(element.value);
}
} 