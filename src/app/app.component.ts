import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './taskCreator.html',
})
export class AppComponent  { 
  name = 'Angular'; 

  writeTaskToFile(){
    console.log('hi');
    
  }
}
