import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .more-than-five-elems {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  showParagraph: boolean = true
  clicksArray: number[] = []
  clicksCounter: number = 0

  constructor() {}

  toggleParagraph(): void {
    this.showParagraph = !this.showParagraph
    this.clicksCounter += 1
    this.clicksArray.push(this.clicksCounter)
  }

  setBackgroundColor(i: number): string {
    return i >= 4 ? 'blue' : ''
  }
}
