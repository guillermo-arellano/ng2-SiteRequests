import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
  MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
  MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
  MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';
import 'hammerjs';
import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule } from '@covalent/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /** Materials Modules*/
    MatButtonModule, 
    MatListModule, 
    MatIconModule, 
    MatCardModule, 
    MatMenuModule, 
    MatInputModule, 
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSelectModule, 
    MatSlideToggleModule, 
    MatDialogModule, 
    MatSnackBarModule, 
    MatToolbarModule,
    MatTabsModule, 
    MatSidenavModule, 
    MatTooltipModule, 
    MatRippleModule, 
    MatRadioModule, 
    MatGridListModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSliderModule, 
    MatAutocompleteModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule, 
    CovalentMediaModule, 
    CovalentExpansionPanelModule,
    CovalentStepsModule, 
    CovalentLoadingModule, 
    CovalentDialogsModule, 
    CovalentSearchModule, 
    CovalentPagingModule,
    CovalentNotificationsModule, 
    CovalentMenuModule, 
    CovalentDataTableModule, 
    CovalentMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
