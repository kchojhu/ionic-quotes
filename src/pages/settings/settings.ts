import { Component } from '@angular/core';
import {NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingsService} from "../../services/settings.service";

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private settingsService: SettingsService, public navCtrl: NavController, public navParams: NavParams) {}

  onToggle(toggle: Toggle) {
    console.log(toggle);
    this.settingsService.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.settingsService.isAltBackground();
  }

}
