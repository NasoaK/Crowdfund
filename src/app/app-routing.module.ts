import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { RewardModalComponent } from "./project-details/reward-modal/reward-modal.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "project", component: ProjectsListComponent },
  { path: "project/:id", component: ProjectDetailsComponent/* , children: [{path:':nameR', component: RewardModalComponent}] */ },
  { path: "about", component: ProjectsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
