import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AccountComponent } from './pages/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { CreateandupdatepostComponent } from './pages/createandupdatepost/createandupdatepost.component';
import { UpdatePostComponent } from './pages/update-post/update-post.component';
import { PaginatePostsComponent } from './pages/paginate-posts/paginate-posts.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    PostsComponent,
    CreatePostComponent,
    CreateandupdatepostComponent,
    UpdatePostComponent,
    PaginatePostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
