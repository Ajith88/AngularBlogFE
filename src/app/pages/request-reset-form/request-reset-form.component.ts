import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-request-reset-form',
  templateUrl: './request-reset-form.component.html',
  styleUrls: ['./request-reset-form.component.scss']
})
export class RequestResetFormComponent implements OnInit {

  constructor( private router: Router, private afAuth: AngularFireAuth, public flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
  }

  reset_password(request_reset: NgForm) {
    this.afAuth.sendPasswordResetEmail(request_reset.value.email).then((response)=> {
      this.flashMessagesService.show('Password Reset Link has been sent to your email', {
        classes: ['alert', 'alert-info'], // You can pass as many classes as you need
        timeout: 5000 // Default is 3000
      });
      this.router.navigateByUrl('login')
    })
  }

}
