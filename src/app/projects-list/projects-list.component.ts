import { Component, Input, OnInit, Output } from '@angular/core';
import { ProjectListService } from '../services/project-list.service';
import { AllProjectsService } from '../services/all-projects.service';
import { IProject } from './Project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  public title = 'liste Projects';

  public projectos: IProject[] = [
    /*  {
      id: 1,
      name: "Mastercraft Bamboo Monitor Riser",
      introduction:
        "A beautiful & handcrafted monitor stand to reduce neck and eye strain ",
      image: "./assets/images/image-hero-desktop.jpg",
      total_earned: 89000,
      logo: "./assets/images/favicon-32x32.png",
      goal: 100000,
      total_backer: 56,
      project_debut: "2021-03-05",
      project_end: "2021-05-05",
      about:
        "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish\nplatform that elevates your screen to a more comfortable
        viewing\nheight. Placing your monitor at eye level has the potential to\nimprove your posture and make you more
        comfortable while at work,\nhelping you stay focused on the task at hand .",
      rewards: [
        {
          name: "bamboo Stand",
          pledge: 25,
          quantity: 101,
          description:
            " You get an ergonomic stand made of natural bamboo. You've helped us\nlaunch our promotional campaign, and you’ll be added to 
            a special\nBacker member list.",
        },
        {
          name: "Black Edition Stand",
          pledge: 75,
          quantity: 64,
          description:
            " You get an ergonomic stand made of natural bamboo. You've helped us\nlaunch our promotional campaign, and you’ll be added to a special\nBacker
            member list.",
        },
        {
          name: "Mahogany Special Edition ",
          pledge: 25,
          quantity: 100,
          description:
            " You get an ergonomic stand made of natural bamboo. You've helped us\nlaunch our promotional campaign, and you’ll be added to a 
            special\nBacker member list.",
        },
      ],
    }, */
  ];

  /*   public projects: IProject[] = []; */

  public showBadge!: boolean;

  public rewardSelected!: boolean;

  public showModal!: boolean;

  public filteredProjects: IProject[] = [];

  private _projectFilter = '';

  public receivedRating!: string;

  public errMsg!: string;

  constructor(
    private projectlistservice: ProjectListService,
    private projectService: AllProjectsService
  ) {}

  get projectFilter(): string {
    return this._projectFilter;
  }

  set projectFilter(filter: string) {
    this._projectFilter = filter;

    this.filteredProjects = this.projectFilter
      ? this.filterProjects(this.projectFilter)
      : this.projects;
  }

  private filterProjects(criteria: string): IProject[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.projects.filter(
      (project: IProject) =>
        project.name.toLocaleLowerCase().indexOf(criteria) > -1
    );
    return res;
  }

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }


  public receiveRatingClicked(message: string): void {
    this.receivedRating = message;
  }

public toggleSelected():void{
  this.rewardSelected = !this.rewardSelected;
}

    public projects: IProject[] = this.projectService.projects;

  @Output()
  rating: number = 2;

  @Input()
  ngOnInit(): void {
this.filteredProjects = this.projects;

   /*  this.projectlistservice.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.filteredProjects = this.projects;
      },
      error: (err) => (this.errMsg = err),
    });
    this.projectFilter = ""; */
  }
}
