import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { IProject } from "../projects-list/Project";
import { IRewards } from "../projects-list/rewards";
import { ProjectListService } from "../services/project-list.service";


@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent implements OnInit {
  public project: IProject = <IProject>{};


  /*   public selectReward(): any {
    this.reward.style.display = "flex";
  } */
  public showModal:boolean;
  public selectReward:boolean;
  public bookmarked:boolean;
  public selectPledge:boolean =false;

  constructor(
    private route: ActivatedRoute,
    private projectlistservice: ProjectListService
  ) {}

public togglePledge():void{
  this.selectPledge = !this.selectPledge;
}
 
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

  public reward : IRewards = <IRewards>{};
   

 @Input() achat:number; 
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
    const id : number = +this.route.snapshot.paramMap.get("id");
    this.projectlistservice.getProjects().subscribe((projects: IProject[]) => {
      this.project = projects.find((project) => project.id === id);
      /* this.reward = this.project.rewards.find(reward) => reward.name === name  */
    });
    this.project.rewards;
    const name:string = this.route.snapshot.paramMap.get("nameR");

    console.log(name+' : name');
    console.log(id);
    console.log(this.reward);
    console.log(this.achat);
    console.log(this.projectlistservice.getProjects());
    
  }


  //* Modal & Modal Form

  public selectedReward?: IRewards;
  public defaultPay: number;


  onSelect(reward: IRewards): void {
    this.selectedReward = reward;
    this.defaultPay = reward.pledge;
    
  }
  
  onSubmit(form: NgForm){
   const pay = form.value['payment'];
   if(pay >= this.selectedReward.pledge ){
     this.totalPayment = this.totalPayment + pay;
    }
  }

  public totalPayment : number=0 ;

 
}
