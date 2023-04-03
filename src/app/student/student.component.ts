import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  studentName!: string;
  score!: number;
  textColor: string = 'black';

  toggleColor(): void {
    // this.textColor = this.textColor === 'black' ? 'green' : 'red';
  }

  calculateScore(): void {
    // Replace with actual score calculation logic
    this.score = Math.floor(Math.random() * 100) + 1;
  
    // Set text color based on score
    if (this.score >= 60) {
      this.textColor = 'green'; // Passed, set text color to green
    } else {
      this.textColor = 'red'; // Failed, set text color to red
    }
  }
}
