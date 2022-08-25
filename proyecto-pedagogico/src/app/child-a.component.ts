import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-a',
  template: `<h1>Child A {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ChildAComponent  {
  @Input() name: string | undefined;
}