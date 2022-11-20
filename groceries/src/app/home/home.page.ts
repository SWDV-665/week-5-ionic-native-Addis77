import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { GroceriesService } from '../services/groceries.service';
import { ModalControllerService } from '../services/modal-controller.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  title = "Grocery";

  constructor(public toastCtrl: ToastController,private socialSharing: SocialSharing, public groceriesService: GroceriesService, public modalControllerService:ModalControllerService) {

  }
ngOnInit(): void {
  
}
  loadItems(){
    return this.groceriesService.getItems();
  }

 async removeItem(item:any, index:any) {
    console.log("Remove Item - ", item, index);
    const toast =await this.toastCtrl.create({
      message: 'Removing Item - ' + index + "...",
      duration: 3000
    });
    toast.present();
    this.groceriesService.removeItem(index);

  }

  async shareItem(item:any, index:any) {
    console.log("Share Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Sharing Item - ' + index + "...",
      duration: 3000
    });
    toast.present(); 
    
    let message = "Grocery Item - Name: " + item.name  + " - Quantity: " + item.quatity;
    let subject = "Share via Groceries app";

    this.socialSharing.share(message, subject).then(() => {
      console.log("Shared succdefully!")
    }).catch((error) => {
      console.error("Error while sharing", error);
    });

  }

  async editItem(item:any, index:any) {
    console.log("Edit Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Edittitng Item - ' + index + "...",
      duration: 3000
    });
    toast.present();
    this.modalControllerService.showPrompot(item, index);

  }

  addItem() {
    console.log("Adding Item");
    this.modalControllerService.showPrompot();
  }

  

}
