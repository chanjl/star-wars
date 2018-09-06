ng new xx
git init
git add .
git commit -a -m "xxx"
git push -u origin master
ng g c components/xx --flat --spec false
ng add @angular/material
npm install --save hammerjs
@import '~@angular/material/prebuilt-themes/indigo-pink.css'
import "hammerjs" in main.ts
npm install --save @angular/flex-layout
npm install --save rxjs@6.2.2
npm install --save @angular/flex-layout@6.0.0-beta.17
create/copy material.module.ts
import/imports MaterialModule and FlexLayoutModule in app.module.ts
ng generate module app-routing
import/imports AppRoutingModule
ng generate service services/xx --flat -speca false
import HttpClient, Observable, environment to xx.service.ts
import HttpClientModule in app.module.ts
import Router to listen to change and navigate to new route

import ActivatedRoute to display.ts