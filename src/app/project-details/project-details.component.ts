import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProject } from "../projects-list/Project";
import { ProjectListService } from "../services/project-list.service";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent implements OnInit {
  public project: IProject = <IProject>{};

  constructor(
    private route: ActivatedRoute,
    private projectlistservice: ProjectListService
  ) {}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get("id");

    console.log(id);
    this.projectlistservice.getProjects().subscribe((projects: IProject[]) => {
      this.project = projects.find((project) => project.id === id);
    });
  }
}
