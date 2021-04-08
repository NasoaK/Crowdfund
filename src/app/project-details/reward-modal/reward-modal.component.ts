import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { IProject } from "../../projects-list/Project";
import { IRewards } from "../../projects-list/Rewards";
import { ProjectListService } from "../../services/project-list.service";




@Component({
  selector: 'app-reward-modal',
  templateUrl: './reward-modal.component.html',
  styleUrls: ['./reward-modal.component.scss']
})
export class RewardModalComponent implements OnInit {


  public project: IProject = <IProject>{};
  public reward :IRewards = <IRewards>{};

  constructor(private route: ActivatedRoute,
  private proLiService : ProjectListService) { }


  ngOnInit(): void {
    
  const name:string = this.route.snapshot.paramMap.get('nameR');
  console.log('name: ' +  name);
/*   this.proLiService.getProjects().subscribe((projects :IProject[]) => {
      this.reward = projects.rewards.find((reward) => reward.name === name);
    });
    */
  }


}
