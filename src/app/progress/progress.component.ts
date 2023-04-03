import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @ViewChild('progressBar')
  progressBarRef!: ElementRef;

  private interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      const progressBar = this.progressBarRef.nativeElement;
      const width = progressBar.offsetWidth;
      const maxWidth = progressBar.parentNode.offsetWidth;
      if (width < maxWidth) {
        progressBar.style.width = `${width + 10}px`;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }
}


