import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import {
  HeaderComponent,
  ButtonComponent,
  TasksComponent,
  TaskComponent,
  NewTaskComponent,
  AboutComponent,
  FooterComponent,
} from "./components";

const appRoutes: Routes = [
  { path: "", component: TasksComponent },
  { path: "about", component: AboutComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
