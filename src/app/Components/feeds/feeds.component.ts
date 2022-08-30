import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';
import { IPost } from 'src/interface/ipost';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  card : IPost[] = [] ; 
  showedCart:IPost[] =[]
  constructor(private posts:PostsService) { 
    this.posts.getPosts().subscribe(item=>{
      this.card = item;
      this.showedCart = item;
    });
  }
  filteration(x:any){
        //  console.log(x.name)
         if(x.name ==="Following"){
          this.showedCart = this.card.filter(item=>item.followed == true)
        }
        if(x.name ==="All"){
          this.showedCart = this.card.filter(item=>  item)
        }
        if(x.name ==="Newest"){
          this.showedCart = [ this.card[this.card.length-1] ]
        }
        if(x.name ==="Popular"){
          this.showedCart = this.card
          for(let i=0 ; i<this.showedCart.length ; i++){
               for(let j=i+1 ; j<this.showedCart.length ; j++){
                    if(this.showedCart[i].loveNumber <this.showedCart[j].loveNumber){
                        let x = this.showedCart[i] ; 
                        this.showedCart[i] = this.showedCart[j];
                        this.showedCart[j] = x ;
                    }
               }
          }
          
        }
        
  }
  ngOnInit(): void {
  }

}
