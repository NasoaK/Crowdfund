import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { IProject } from "../projects-list/Project";
import { IRewards } from "../projects-list/rewards";

import { AllProjectsService} from "../services/all-projects.service";
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
  
  public selectReward:boolean;
  public bookmarked:boolean;
  public selectPledge:boolean =false;

  public togglePledge():void{
  this.selectPledge = !this.selectPledge;
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

  constructor(
    private route: ActivatedRoute,
    private projectlistservice: ProjectListService,
    private projectService: AllProjectsService
  ) {}


 @Input() achat:number; 


  public bookmarkText():string{  
    if(this.bookmarked){
      return 'bookmarked';
    }else{
      return 'bookmark';
    }
  }

  allHide(){
    this.project.rewards.forEach(rewardo => {
      rewardo.hide = false ;
    });
  }
  
  ngOnInit(): void {
  
   const id : number = +this.route.snapshot.paramMap.get("id");
   this.project = this.projectService.projects.find((project) => project.id === id);

  console.log('id :'+id);
  console.log('project :' +this.project);
   /* this.projectlistservice.getProjects().subscribe((projects: IProject[]) => {
      this.project = projects.find((project) => project.id === id);
    });
    this.project.rewards;
    const name:string = this.route.snapshot.paramMap.get("nameR");

 */

  }

  //* Modal & Modal Form

  public selectedReward?: IRewards;
  public selectedRewardo?: IRewards;
  public confirmPay:boolean=false;
  public showModal:boolean;
  public allPledges:boolean;

  toggleModal():void{
    this.showModal = !this.showModal;
  }
  toggleAllPledge(){
    this.allPledges = !this.allPledges;
    this.toggleModal();
    this.confirmPay = false ;
  }

  succesPay(){
    this.confirmPay=!this.confirmPay;
  }

  onSelect(reward: IRewards): void {
     console.log(reward)
    this.selectedReward = reward;
    this.confirmPay = false ;
    this.toggleModal()
  }

    

  hideShowEffect(reward: IRewards): void {
    this.allHide();
    reward.hide = !reward.hide;
   this.confirmPay = false ;
   reward= this.selectedRewardo;
 }
  
 
  onSubmit(form: NgForm, reward:IRewards){
   const pay = form.value['payment'];
   if(pay >= reward.pledge ){
    /*  this.totalPayment = this.totalPayment + pay; */
     this.project.total_earned = this.project.total_earned + pay;
     this.succesPay();
     reward.quantity--;
     this.allPledges=false;
     this.project.total_backer ++;
    }
  }


  public totalPayment : number=0 ;

 
}
