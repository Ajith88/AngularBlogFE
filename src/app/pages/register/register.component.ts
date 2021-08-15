import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public flashMessagesService: FlashMessagesService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  save(user: NgForm) {
    console.log(user.value)
    const email=user.value.email
    const password= user.value.password
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user)=> {
      this.flashMessagesService.show('My component has initialized!', {
        classes: ['alert', 'alert-info'], // You can pass as many classes as you need
        timeout: 2000 // Default is 3000
      });
      console.log(user)
      this.router.navigateByUrl('login')
    })

  }

}
