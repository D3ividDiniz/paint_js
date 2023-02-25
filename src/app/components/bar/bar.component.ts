import { Component, HostListener, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {
  canShow = true;
  fixed = false;

  OpenBar(isEntered: boolean): void {
    if(this.fixed) {
      return
    }
    if (isEntered) {
      this.canShow = false
      return
    }
    this.canShow = true
  }

  fixedBar():void{
    if(this.fixed == false){
      this.fixed = true; return}
    this.fixed = false
  }





}
