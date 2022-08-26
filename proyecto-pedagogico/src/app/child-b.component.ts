import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-b',
  template: `<h1>Child B {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ChildBComponent  {
  @Input() name: string | undefined;
}