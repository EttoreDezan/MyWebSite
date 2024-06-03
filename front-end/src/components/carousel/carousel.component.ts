import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ModalComponent} from "../modal/modal.component";
import {IProject} from "../../interfaces/iproject";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgForOf,
    ModalComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() projects!: IProject[];

  public projectSelected: IProject = {
    id: 0,
    imageUrl: '',
    description: '',
    company: '',
    title: '',
    jobPosition: ''
  };

  modalOpen = false;

  openModal(project: IProject) {
    this.modalOpen = true;
    this.projectSelected = project;
  }

  onModalClose(event: boolean): void {
    this.modalOpen = event;
  }

}
