import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'
import { AccountComponent } from './pages/account/account.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { UpdatePostComponent } from './pages/update-post/update-post.component';
import { PaginatePostsComponent } from './pages/paginate-posts/paginate-posts.component';
import { RequestResetFormComponent } from './pages/request-reset-form/request-reset-form.component';
import { ResetPasswordFormComponent } from './pages/reset-password-form/reset-password-form.component';

const redirectUnAuthorizedLogin= ()=> redirectUnauthorizedTo(['login'])
const redirectAuthorizedLogin= ()=> redirectLoggedInTo(['home'])

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnAuthorizedLogin}
  },
  {
    path: 'homee',
    component: PaginatePostsComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnAuthorizedLogin}
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnAuthorizedLogin}
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnAuthorizedLogin}
  },
  {
    path: 'post/:id',
    component: PostsComponent
  },
  {
    path: 'post/:id/update',
    component: UpdatePostComponent
  },
  {
    path: 'new_post',
    component: CreatePostComponent
  },
  {
    path: 'reset-password',
    component: RequestResetFormComponent,
    data: {authGuardPipe: redirectAuthorizedLogin}
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordFormComponent,
    data: {authGuardPipe: redirectAuthorizedLogin}
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnAuthorizedLogin}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
