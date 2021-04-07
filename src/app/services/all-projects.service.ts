import { Injectable } from '@angular/core';
import { IProject } from '../Projects-list/Project';


@Injectable({
  providedIn: 'root'
})
export class AllProjectsService {

projects :IProject[] = [

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
  }
]
  constructor() { }
}
