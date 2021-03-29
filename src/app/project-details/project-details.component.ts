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
  public reward: any = document.querySelector(".modal-rewards-bottom");

  /*   public selectReward(): any {
    this.reward.style.display = "flex";
  } */
  public showModal:boolean;
  public selectReward:boolean;
  public bookmarked:boolean;

  constructor(
    private route: ActivatedRoute,
    private projectlistservice: ProjectListService
  ) {}

  public toggleModal():void{
    this.showModal = !this.showModal;
  }

  public selectRewards():void{
    this.selectReward= !this.selectReward
  }
  
  public toggleBookmark(): void{
    this.bookmarked = !this.bookmarked;
  }

  public getPerct(a,b):number{
    return a/b ;
  }

  //!
  /* public reachGoal():number{
    const bar = this.projectlistservice.getProjects().projects.goal
  } */
   //! 

  public bookmarkText():string{  
    if(this.bookmarked){
      return 'bookmarked';
    }else{
      return 'bookmark';
    }
  }


  
  ngOnInit(): void {
    /*     this.selectReward(); */
    const id: number = +this.route.snapshot.paramMap.get("id");
    console.log(id);
    console.log(this.reward);
    this.projectlistservice.getProjects().subscribe((projects: IProject[]) => {
      this.project = projects.find((project) => project.id === id);
    });
    console.log(this.projectlistservice.getProjects())
  /*   this.getPerct(project.total_earned, project.goal) */

    
  }
}
