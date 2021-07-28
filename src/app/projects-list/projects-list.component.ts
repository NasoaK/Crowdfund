import { Component, Input, OnInit, Output } from "@angular/core";
import { ProjectListService } from "../services/project-list.service";
import { AllProjectsService } from "../services/all-projects.service";
import { IProject } from "./Project";
import { IRewards } from "./Rewards";

@Component({
  selector: "app-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.scss"],
})
export class ProjectsListComponent implements OnInit {
  public title = " liste Projects";

  public projectos: IProject[] = [
     {
      id: 1,
    name: "Mastercraft Bamboo Monitor Riser",
    introduction: "A beautiful & handcrafted monitor stand to reduce neck and eye strain ",
    total_earned: 80000,
    logo: "./assets/images/logo-mastercraft.svg",
    image: "./assets/images/image-hero-desktop.jpg",
    goal: 100000,
    total_backer: 5700,
    project_debut: "2021-03-05",
    project_end: "2021-05-05",
    thanks:"Your pledge bring us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide . You will get an email once our campaign is completed",
    about: "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish\nplatform that elevates your screen to a more comfortable viewing\nheight. Placing your monitor at eye level has the potential to\nimprove your posture and make you more comfortable while at work,\nhelping you stay focused on the task at hand . \n\n Featuring artisan craftmanship, the simplicity of design creates extra desk space below your computer to allows notepads, pens, and USB sticks to be stored under the stand.",
    rewards: [
      { 
        name: "Bamboo",
        pledge: 25,
        quantity: 101,
        description: " You get an ergonomic stand made of natural bamboo. You've helped us\nlaunch our promotional campaign, and you’ll be added to a special\nBacker member list.",
        hide:false
      },
      {
        name: "Black Edition Stand",
        pledge: 75,
        quantity: 64,
        description: "You get a Black Special Edition computer stand and a personal thank",
        hide:false
      },
      {
        name: "Mahogany Special Edition ",
        pledge: 200,
        quantity: 100,
        description: "   You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        hide:false
      }
    ]
    },
  ];

  /*   public projects: IProject[] = []; */

  public showBadge!: boolean;

  public rewardSelected!: boolean;

  public showModal!:boolean;

  public filteredProjects: IProject[] = [];

  private _projectFilter = "";

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

    public projects :IProject[] = this.projectos;


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
