import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
     
  }
  
  
 todo = {}
  logForm() {
    console.log('Submit');
  }
  
   inputs = [];
   
   addInput() {
    this.inputs.push({value: 'Textfield'});
  }
  
}
