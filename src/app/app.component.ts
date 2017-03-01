import { Component, OnInit } from '@angular/core';
import { StepState, IStepChangeEvent, TdMediaService } from '@covalent/core';

enum SiteType {
  closed_O365_Group_Site,
  closed_SP_Online_Site,
  closed_SP_OnPrem_Site,
  opened_AEM_Site,
  opened_SP_Online_Site,
  opened_SP_OnPrem_Site,
  dummy_site
}

export class SiteCard {
    siteType: SiteType;
    siteTypeText: string;
    selectedClass: boolean;
}

export class SiteRequest {
    open_site: boolean;
    siteType: string;
    siteName: string;
    siteUrl: string;
    ownerPrimary: string;
    ownerSecondary: string;
}

export class SiteInfo {
    siteName: string;
    siteOwnerPrimary: string;
    siteOwnerSecondary: string;
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
  checked: boolean;
  sitecards: SiteCard[];
  siteCardSelected: SiteCard;
  siteRequestObj: SiteRequest;
  siteFormModel: SiteInfo;
  
  constructor(public media: TdMediaService){}

  ngOnInit (): void {
    this.setFormVariables();
    this.setSiteCardFormVars();
  }

  setSiteCardFormVars(): void {
     this.sitecards = [
      {siteType: SiteType.closed_O365_Group_Site, siteTypeText: "O365 Group Site", selectedClass: false},
      {siteType: SiteType.closed_SP_Online_Site, siteTypeText: "SP Online Site", selectedClass: false},
      {siteType: SiteType.closed_SP_OnPrem_Site, siteTypeText: "SP OnPrem Site", selectedClass: false},
      {siteType: SiteType.opened_AEM_Site, siteTypeText: "AEM Site", selectedClass: false},
      {siteType: SiteType.opened_SP_Online_Site, siteTypeText: "SP Online Site", selectedClass: false},
      {siteType: SiteType.opened_SP_OnPrem_Site,siteTypeText: "SP OnPrem Site",  selectedClass: false}
    ] 
  }

  setFormVariables(): void {
    this.checked= false;
    this.siteCardSelected= {
      siteType: SiteType.dummy_site, 
      siteTypeText: '',
      selectedClass: false
    };
    this.siteRequestObj = {
      open_site: false,
      siteType: '',
      siteName: '',
      siteUrl: '',
      ownerPrimary: '',
      ownerSecondary: ''
    };
    this.siteFormModel= {
      siteName: '',
      siteOwnerPrimary: '',
      siteOwnerSecondary: ''
    };
  }

  toggleCardSelected(type: string): void {
    this.resetSiteCardFormVars();
    let siteTypeEnumValue = SiteType[type];
    this.sitecards[siteTypeEnumValue].selectedClass = true;
    this.siteCardSelected = this.sitecards.filter(item => item.selectedClass === true)[0];
  }

  resetSiteCardFormVars(): void {
    this.setSiteCardFormVars();
  }

  resetEntireSiteRequestForm(): void{
    this.setSiteCardFormVars();
    this.setFormVariables();
  }

  createSiteRequestObj (): void {
    this.siteRequestObj.open_site= this.checked;
    this.siteRequestObj.siteType= this.siteCardSelected.siteTypeText;
    this.siteRequestObj.siteName= this.siteFormModel.siteName;
    this.siteRequestObj.siteUrl= '';
    this.siteRequestObj.ownerPrimary= this.siteFormModel.siteOwnerPrimary;
    this.siteRequestObj.ownerSecondary= this.siteFormModel.siteOwnerSecondary;
  }

 change(event: IStepChangeEvent): void {
    //console.log(event);
  };

}

