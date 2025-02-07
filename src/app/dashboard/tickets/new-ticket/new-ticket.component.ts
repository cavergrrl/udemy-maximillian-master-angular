import { Component } from '@angular/core';
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

  onSubmit(titleInput: HTMLInputElement, requestInput: string) {
    console.dir(titleInput);
    console.log("get value for titleInput in HTMLInputElement --> " + titleInput.value);
    console.log("requestInput that only received the HTMLInputElement.value --> " + requestInput);
  }
}
