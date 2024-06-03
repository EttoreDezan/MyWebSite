import {
  Component,
  Input,
  ElementRef,
  Output, EventEmitter
} from '@angular/core';
import {IProject} from "../../interfaces/iproject";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() projectSelected!: IProject;
  @Output() modalClose: EventEmitter<boolean> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  modalOpen: boolean = false;

  closeModal() {
    this.isOpen = false;
    this.modalClose.emit(false);
  }

  openModal(project: IProject) {
    this.modalOpen = true;
    this.projectSelected = project;

    console.log('project selected ', this.projectSelected)
  }

}
