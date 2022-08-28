import { Component, OnInit } from '@angular/core';
import { ISidebar } from 'src/interface/isidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  side : ISidebar[] ; 
  defaultColor:string;
  color:string ;
  constructor() { 
  this.side = [
    {imgs:'assets/8.webp',names:'you'},
    {imgs:'assets/9.webp',names:'you'},
    {imgs:'assets/10.jpg',names:'you'},
  ]
  this.defaultColor = '#fff'
  this.color = '#fff';
}
  ngOnInit(): void {
  }

}
