import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../projects-list/Project';
import { IRewards } from '../projects-list/Rewards';
import { LayoutModule } from '@angular/cdk/layout';

import { AllProjectsService} from '../services/all-projects.service';
import { ProjectListService } from '../services/project-list.service';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  public project: IProject = <IProject> {};
  public reward: IRewards = <IRewards> {};

/*   public selectReward:boolean; */
  public bookmarked: boolean;
  public selectPledge: boolean = false;
  public togglePledge(): void{
  this.selectPledge = !this.selectPledge;
  }


/*   public selectRewards():void{
    this.selectReward= !this.selectReward
  } */
  public toggleBookmark(): void{
    this.bookmarked = !this.bookmarked;
  }

  public getPerct(a, b): number{
    return a/b;
  }

  constructor(
    private route: ActivatedRoute,
    private projectlistservice: ProjectListService,
    private projectService: AllProjectsService,
    private layout: LayoutModule
  ) {}


 @Input() achat: number; 


  public bookmarkText(): string{  
    if(this.bookmarked){
      return 'bookmarked';
    }else{
      return 'bookmark';
    }
  }

   
  isSmallScreen: boolean;


  ngOnInit(): void {
  
   const id: number = +this.route.snapshot.paramMap.get("id");
   this.project = this.projectService.projects.find((project) => project.id === id);

  console.log('id :'+id);
  console.log('project :' +this.project);
   /* this.projectlistservice.getProjects().subscribe((projects: IProject[]) => {
      this.project = projects.find((project) => project.id === id);
    });
    this.project.rewards;
    const name:string = this.route.snapshot.paramMap.get("nameR"); */
  }

  //* Modal & Modal Form

  public selectedReward?: IRewards;
  public selectedRewardo?: IRewards;
  public confirmPay: boolean=false;
  public showModal: boolean;
  public allPledges: boolean;
  public defaultSelected: boolean;

  resetHide(){
    this.project.rewards.forEach(reward => {
      reward.hide = false ;
    });
    this.defaultSelected = false
  }
  

  toggleModal(): void{
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
    this.resetHide();
    reward.hide = !reward.hide;
   this.confirmPay = false ;
   reward= this.selectedReward;
 }

 selectDefault(){
  this.resetHide();
  this.defaultSelected = true;

 }
    onSubmit(form: NgForm, reward:IRewards){
   const pay = form.value['payment'];
   if(pay >= reward.pledge ){
     this.totalPayment = this.totalPayment + pay;
     this.project.total_earned = this.project.total_earned + this.totalPayment;
     this.succesPay();
     reward.quantity--;
     this.allPledges=false;
     this.project.total_backer ++;
    }
  }
    submit(form: NgForm){
    const pay = form.value['payment'];
    if(pay>=this.defaultPledge){
      this.totalPayment = this.totalPayment + pay;
           this.project.total_earned = this.project.total_earned + this.totalPayment;
      this.succesPay();
      this.allPledges=false;
      this.project.total_backer ++;
    }
     
   }
   public defaultPledge : number = 0;
  public totalPayment : number = 0 ;

 
}
