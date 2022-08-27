import { Component, OnInit } from '@angular/core';
import { IStories } from 'src/interface/istories';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
   stories : IStories[] ; 
  constructor() { 
      this.stories = [
        {img:'assets/1.webp',name:'you'},
        {img:'assets/2.webp',name:'mina'},
        {img:'assets/3.webp',name:'fady'},
        {img:'assets/4.webp',name:'ali'},
        {img:'assets/5.webp',name:'ahmed'},
        {img:'assets/6.webp',name:'eslam'},
        {img:'assets/7.webp',name:'jo'},
        

        
      
    ]
  }

  ngOnInit(): void {
  }

}
