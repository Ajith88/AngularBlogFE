import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private flashMessagesService: FlashMessagesService,
    private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {

  }

  async login(user: NgForm) {
    console.log(user.value)
    const email=user.value.email
    const password= user.value.password
    await this.afAuth.signInWithEmailAndPassword(email, password).then((result)=>{
      console.log(result)
      //@ts-ignore
      localStorage.setItem('id', result.user?.uid)
      this.router.navigateByUrl('home')
      result.user?.getIdTokenResult().then(user => {
        localStorage.setItem('token', user.token)
      })
      console.log(user)
    }).catch(error=> {
      console.log(error)
    })
  }



}
