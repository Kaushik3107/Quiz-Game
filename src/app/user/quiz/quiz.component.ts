import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;

  constructor(private router: Router) {
    this.loadQuestions();
  }

  loadQuestions() {
    // Sample questions, in a real application you would fetch this from the server
    this.questions = [
      { question: 'What is 2 + 2?', options: ['2', '3', '4'], answer: '4' },
      {
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris'],
        answer: 'Paris',
      },
      { question: 'What is 4 + 2?', options: ['2', '3', '6'], answer: '6' },
      {
        question: 'Most used CSS frameworks are ________?',
        options: ['Bootstrap', 'SASS', 'Foundation'],
        answer: 'Bootstrap',
      },
      { question: 'What is 6 + 2?', options: ['2', '8', '6'], answer: '8' },
      {
        question:
          'Which of the following directive is used to bind the application data to the HTML view in AngularJS?',
        options: [
          'ng-app directive',
          'ng-model directive',
          'ng-bind directive',
        ],
        answer: 'ng-bind directive',
      },
      { question: 'What is 6 + 6?', options: ['12', '8', '6'], answer: '12' },
      { question: 'What is 9 + 2?', options: ['11', '7', '5'], answer: '11' },
      { question: 'What is 3 + 2?', options: ['4', '5', '6'], answer: '5' },
      // Add more questions as needed
    ];
    this.questions = this.shuffle(this.questions).slice(0, 6); // Random 6 questions
  }

  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  answerQuestion(option: string) {
    if (option === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['']);
  }
}
