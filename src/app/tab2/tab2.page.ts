import { Component } from '@angular/core';
import { word_class } from '../classes/word_class';
import { WordService } from '../service/word.service';
import { UserService } from '../service/user.service';
import { user_class } from '../classes/user_class';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  user:any[]=[];
  constructor(public _ser:WordService,public _ser1:UserService) {}


  ngOnInit()
  {
    this._ser1.getUser().subscribe(
      (data:user_class[])=>{
        console.log(data);
        for(let k=0;k<data.length;k++)
        {
          this._ser.getCntAvgByWorduser(data[k].u_id).subscribe(
            (data1:any[])=>
            {
              console.log(data1);
              if(data1[0].Count_words!=0)
              {
                this.user.push(data1[0]);
                this.user.sort((a,b)=>{
                  if(a.Avg_rating>b.Avg_rating)
                  {
                    return -1;
                  }
                  else if(b.Avg_rating>a.Avg_rating)
                  {
                    return 1;
                  }
                  else
                  {
                    return 0;
                  }
                });
              }
            }
          );
          
        }
      }
    );
  }


}
