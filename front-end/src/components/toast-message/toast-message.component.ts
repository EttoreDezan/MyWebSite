import {booleanAttribute, Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.css'
})
export class ToastMessageComponent {
  @Input({transform: booleanAttribute}) isOpen: boolean = false;
  @Output() toastClose: EventEmitter<boolean> = new EventEmitter();

  closeToast() {
    this.isOpen = false;
    this.toastClose.emit(false);
  }

}
