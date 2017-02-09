import { Component, OnInit } from '@angular/core';
import { StepState } from '@covalent/core';

export class Card {
  constructor(
    public card1: boolean,
    public card2: boolean,
    public card3: boolean
  ) {  }
}

enum SiteType {
  closed_O365_Group_Site,
  closed_SP_Online_Site,
  closed_SP_OnPrem_Site,
  opened_O365_Group_Site,
  opened_SP_Online_Site,
  opened_SP_OnPrem_Site,
}

export class SiteCard {
    siteType: SiteType;
    selectedClass: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  {
  title = 'Site Requests App';
  //Initialization
  disabled: boolean = true;
  stepState: string = 'none';
  checked: boolean = false;
  modelCardSelected: boolean = false;
  sitecards: SiteCard[];

  ngOnInit (): void {
    this.setFormVariables();
  }

  setFormVariables(): void {
     this.sitecards = [
      {siteType: SiteType.closed_O365_Group_Site, selectedClass: false},
      {siteType: SiteType.closed_SP_Online_Site, selectedClass: false},
      {siteType: SiteType.closed_SP_OnPrem_Site, selectedClass: false},
      {siteType: SiteType.opened_O365_Group_Site, selectedClass: false},
      {siteType: SiteType.opened_SP_Online_Site, selectedClass: false},
      {siteType: SiteType.opened_SP_OnPrem_Site, selectedClass: false}
    ] 
  }

  toggleCardSelected(type: string): void {
    this.resetVariables();
    let temp = SiteType[type];
    console.log(temp);
    this.sitecards[temp].selectedClass = true;
    console.log(this.sitecards[temp].selectedClass);
  }

  resetVariables(): void {
    this.setFormVariables();
  }

}

