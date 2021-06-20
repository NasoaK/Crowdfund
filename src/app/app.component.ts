import {Component, OnInit} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Crowdfund';

  menuState: boolean;
  isSmallScreen: boolean;

  toggleMenu(): void{
    this.menuState = !this.menuState;
  }

  constructor(private layout: BreakpointObserver){}

  ngOnInit(): void{
    if (this.layout.isMatched('(max-width: 599px)')){
      console.log('smallScreen');
      this.menuState = false;
      this.isSmallScreen = true;
    }else if (this.layout.isMatched('(min-width: 599px)')){
      console.log('big screen');
      this.isSmallScreen = false;
      this.menuState = true ;
    }
    console.log(this.isSmallScreen);
  }
}
