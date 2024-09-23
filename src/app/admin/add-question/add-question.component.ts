import { Component } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent {
  question: string = '';
  options: string[] = ['', '', '', ''];
  answer: string = '';

  addQuestion() {
    const quizQuestions = JSON.parse(
      localStorage.getItem('quizQuestions') || '[]'
    );
    quizQuestions.push({
      question: this.question,
      options: this.options,
      answer: this.answer,
    });
    localStorage.setItem('quizQuestions', JSON.stringify(quizQuestions));
    alert('Question added successfully');
    this.resetForm();
  }

  resetForm() {
    this.question = '';
    this.options = ['', '', '', ''];
    this.answer = '';
  }
}
