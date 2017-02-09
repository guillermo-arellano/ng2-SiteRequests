import { Component } from '@angular/core';
import { StepState } from '@covalent/core';

export class Step {
  id: number;
  state: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Site Requests App';
  //Initialization
  disabled: boolean = true;
  stepState: string = 'none';
  checked: boolean = false;
  checkCircleDisabled: boolean = true;


  activeEvent(): void {
    return;
  }

  deactiveEvent(): void {
    return;
  }

  toggleDisable(): void {
    console.log("Hello?!");
    this.checkCircleDisabled = !(this.checkCircleDisabled);
    
  }

}

