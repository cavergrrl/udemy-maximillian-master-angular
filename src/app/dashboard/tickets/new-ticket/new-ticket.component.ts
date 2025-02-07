import {Component, ElementRef, ViewChild} from '@angular/core';
import {ControlComponent} from '../../../shared/control/control.component';
import {ButtonComponent} from "../../../shared/button/button.component";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [
    ControlComponent,
    ButtonComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  @ViewChild(ButtonComponent) private button?: ButtonComponent;

  onSubmit(titleInput: HTMLInputElement,
           requestInput: string
  ) {
    console.dir(titleInput);HTMLFormElement
    console.log("get value for titleInput in HTMLInputElement --> " + titleInput.value);
    console.log("requestInput that only received the HTMLInputElement.value --> " + requestInput);

    this.button?.setIsSubmitted(true);
    this.form?.nativeElement.reset();
  }
}
