import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  private submitted: boolean = false;

  setIsSubmitted(value: boolean) {
    this.submitted = value;
  }

  get isSubmitted(): boolean {
    return this.submitted;
  }
}
