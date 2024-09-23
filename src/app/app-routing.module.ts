import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './admin/add-question/add-question.component';
import { LoginComponent } from './user/login/login.component';
import { QuizComponent } from './user/quiz/quiz.component';
import { RegisterComponent } from './user/register/register.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  { path: '', component: HomescreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'admin/add-question', component: AddQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
