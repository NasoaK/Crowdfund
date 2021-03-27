import { IRewards } from "./Rewards";

export interface IProject {
  id: number;
  name: string;
  introduction: string;
  image: string;
  total_earned: number;
  logo: string;
  goal: number;
  total_backer: number;
  project_debut: string;
  project_end: string;
  about: String;
  rewards: IRewards[];
}
