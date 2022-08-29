import { Component, OnInit } from '@angular/core';
import { IStories } from 'src/interface/istories';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
   stories : IStories[] ;
   defaultColor : string ;
   color:string ;
  constructor() { 
      this.stories = [
        {img:'assets/1.webp',name:'you'},
        {img:'assets/2.webp',name:'Supardi'},
        {img:'assets/3.webp',name:'Dean'},
        {img:'assets/4.webp',name:'Theodore'},
        {img:'assets/5.webp',name:'Walter'},
        {img:'assets/6.webp',name:'Jesse'},
        {img:'assets/7.webp',name:'jo'}    
    ]
  this.defaultColor = 'white'
  this.color = 'white'
}


  ngOnInit(): void {
  }

}
