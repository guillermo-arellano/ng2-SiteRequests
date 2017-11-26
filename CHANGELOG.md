# 1.0.0 (2017-11-26)

## Quick upgrade of the app to latest angular, cli, and ui platform versions as Nov 2017

*  Adding Teradata Covalent UI icon sets.
*  Updated the Readme.
*  Updated the Material design style properties for buttons in Step 4 and Step 5
*  Updated the button properties for Step 3 of the Wizard
*  Updated the attribute property values being used for material styles on buttons for Steps 1 and 2.
*  Modified the input type for the material input field directive.
*  Included the Angular Animations module to the package.json file.
*  Updated the styles being used by latest release of Covalent UI
*  Explicitly defined component variable of type StepState and set equal to enum StepState.None. Modified view template.
*  Angular Material selector elements updated on view template.
*  Updated the materials checkbox and toolbar elements in view template.
*  Adding Covalent and Materials modules to main app module definition.
*  Updated Angular-cli.json to at least run 'ng serve' script
*  Updated Karma and Protractor libraries in project
*  Updated Covalent Core to 1.0.0-rc0 and to Angular 5.0.0
*  Updated Material and Angular CLI dependencies
*  Include changelog into project
*  Updated the app version to 1.0.0

# 0.0.0-Alpha (2017-06-21)

### Initial release for demo

* Updated the ReadMe with more information and description about project.
* Fixed the Stepper headers being clickable before end-user completed current step. This forces user to follow sequential step in the wizard before proceeding to next step.
* Committing a change to push Prod build to GitHub for Azure consumption.
* Have implemented Ed Morales's TdMediaServices from Teradata Covalent framework to auto-detect screen size. Tied it to mode input on View template. Pushing Build as well with this submission.
* Created a Build of the last changes made to the Code and pushed to Develop Branch.
* Modified Step 4 to take users to Step 5 completed. Added the Review Site page component. Tracking everything in a SiteRequest Object. Able to reset the state of the form back to the beginning.
* Added the ability to Select a site card and store that information in the model using Enumerators.
* Set the md-card-content height to 200px. Center aligned the pros/cons section text.
* Performed tweaks to CSS stylings. Added spacing between site 'cards.'
* Merge branch 'master' of github.com:guillermo-arellano/ng2-SiteRequests into develop
* ran the 'build' command to create /dist folder. pushing this new /dist folder up to remote.
* Merge pull request #1 from guillermo-arellano/develop
* Just making a quick change to test SourceTree integration.
* Initial commit
