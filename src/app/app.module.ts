import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {LayoutModule} from '@angular/cdk/layout';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RewardModalComponent } from './project-details/reward-modal/reward-modal.component';
import {AllProjectsService } from './services/all-projects.service';

import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    RewardModalComponent,
 
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,LayoutModule, MatRadioModule],
  providers: [AllProjectsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
