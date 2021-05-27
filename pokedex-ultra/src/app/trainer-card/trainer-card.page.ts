import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { map, take } from 'rxjs/operators';
import { DbService } from './../services/db.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.page.html',
  styleUrls: ['./trainer-card.page.scss'],
})
export class TrainerCardPage implements OnInit {

  constructor(private db: DbService, private authSvc: AuthService, private router: Router) { }

  name = firebase.default.auth().currentUser.displayName;

  gender = this.db.getUser(firebase.default.auth().currentUser.uid).then(
    (res) => {
      return res.gender;
    }
  )

  genders = {
    m: '../assets/userImgs/male.jpg',
    f: '../assets/userImgs/female.png',
    n: '../assets/userImgs/neutral.jpg',
  };

  ngOnInit() {
  }

  logout() {
    this.authSvc.logout();
  }

  ruta(){
    console.log("Test");
    this.router.navigate(['/home']);
  }
}
