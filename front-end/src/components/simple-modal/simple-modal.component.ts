import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProject} from "../../interfaces/iproject";

@Component({
  selector: 'app-simple-modal',
  standalone: true,
  imports: [],
  templateUrl: './simple-modal.component.html',
  styleUrl: './simple-modal.component.css'
})


export class SimpleModalComponent {
  @Input() isOpen: boolean = false;
  @Input() data: {
    title: string,
    description: string,
  } = {};
  @Output() modalClose: EventEmitter<boolean> = new EventEmitter();

  modalOpen: boolean = false;

  closeModal() {
    this.isOpen = false;
    this.modalClose.emit(false);
  }

  openModal(project: IProject) {
    this.modalOpen = true;

  }
}
