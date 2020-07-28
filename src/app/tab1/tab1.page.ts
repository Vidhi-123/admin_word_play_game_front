import { Component } from '@angular/core';
import { WordService } from '../service/word.service';
import { word_class } from '../classes/word_class';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  words_arr:word_class[]=[];
  constructor(private _ser:WordService,public alertController: AlertController) {}
  
    async presentAlertConfirm(item) {
      //console.log(item);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Are u sure u want to delete!',
        message:item.w_name,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
              this._ser.DeleteWord(item.w_id).subscribe(
                (data:any)=>{
                  console.log(data);
                  if(data.affectedRows==1)
                  {
                    this.words_arr.splice(this.words_arr.indexOf(item),1);
                  }
                }
              );
            }
          }
        ]
      });
  
      await alert.present();
    }
  
  ngOnInit(){
    this._ser.getAllWord().subscribe(
      (data:word_class[])=>{
        console.log(data);
        this.words_arr=data;
      }
    )
  }

}
