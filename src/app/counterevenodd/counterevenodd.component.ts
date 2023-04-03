import { Component } from '@angular/core';

@Component({
  selector: 'app-counterevenodd',
  templateUrl: './counterevenodd.component.html',
  styleUrls: ['./counterevenodd.component.scss']
})
export class CounterevenoddComponent {
  assignmentNo = 1;
  name = `Assignment ${this.assignmentNo}`;
  numbers: number[] = [];

  onClick() {
    this.numbers.push(this.numbers.length + 1);
  }

}
