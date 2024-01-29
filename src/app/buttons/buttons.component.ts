import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  styles:[
    `
    @use "utils" as u;
    .storybook-button--secondary{
      @include u.breakpoints-small {
      background-color: red;
      }
    }
    `
  ]
})
export class ButtonsComponent {
/**
   * Is this the principal call to action on the page?
   */
@Input()
primary = false;

/**
 * What background color to use
 */
@Input()
backgroundColor?: string;

/**
 * How large should the button be?
 */
@Input()
size: 'small' | 'medium' | 'large' = 'medium';

/**
 * Button contents
 *
 * @required
 */
@Input()
label = 'Button';

/**
 * Optional click handler
 */
@Output()
onClick = new EventEmitter<Event>();

public get classes(): string[] {
  const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return ['storybook-button', `storybook-button--${this.size}`, mode];
}
}
