#Manjot Singh
Project about the my favourite places that i vist
# MSFavouritePlaces 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##start
- Create new project Phpstrom 
- Select AngularCli 
- Open In Vs code 
- Test Project `npm start`
- Try to change css to scss
- Add `"generateinterface": "ng generate interface",
  "generateclass": "ng generate class",
  "generatecomponent": "ng generate component"` 
- To package.json file
- ### To migrate css to sccs
- Run - `npm install schematics-scss-migrate`
- Run `npm run-script ng g schematics-scss-migrate:scss-migrate`
- ### create model/interface
- Run `ng generate interface model/Content`
- Or
- `npm run-script generateInterface model/Content
- ### Create Component
- Run - `npm run-script ng generate component ContentCard`
- Run `npm run-script ng generate component ContentList`
- Set all from assignment 2
- Go to 5th assignment
### Create Mock data
- create file directory `data` and inside a file `mock-content.ts`
- Place all list data into Mock content list
- See assignment 5 contentListComponet.ts
- Then we need to Create a service to export content
- Run `npm run-script ng generate service services/content`
- See assignment 5 services/service.ts
- Next update Ngonit from contentList
- add `private placeService PlaceService` to constructer
- ### Creating a route
- Run `ng generate module app-routing --flat`
- Change appcomponent.html `<router-outlet></router-outlet>`
- Open `app-routing.module.ts`
- See assignment-6 LAte
### for search content
- add new componet for search 
- see assignment-6 late
- add route to app-routing.moudle.ts
- ### detail content
- add new component 
- see assignment-6 Late
- add route and ngmodule imports in app-rauting.module.ts
- add Approutingmodule imports in module.ts
- add suscribe parameter detailcontent.ts
- ### Adding api 
- add `"angular-in-memory-web-api": "^0.13.0",` in package.json
- Run  `npm install angular-in-memory-web-api@0.13.0 --save`
- Run `npm run-script ng generate service services/InMemoryData`
- CreteDB , Add implimemts  See assignmnet 7 inmemorydataservice.ts 
- Add httpclient module in module.ts See assignment 7
- Change placeservice to get content from api , add http options in header
### Add update or add content
- Run `npm run-script ng generate component ChangeContent
  `
- Add new component to the routing ` {
  path: "addContent",
  component: ChangeContentComponent
  },
  {
  path: "updateContent/:id",
  component: ChangeContentComponent
  }`
- Add button function to changeContent.ts see assignmernt - 7 
#### create form 
- Add formmodule in module.ts
#### adding angular theme
- Run `ng add @angular/material`

