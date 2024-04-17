import { Component, Input, signal } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ToDo } from '../todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  edit = signal(false);
  @Input() todo: ToDo = { id: 0, name: '', completed: false };

  toggleEdit() {
    this.edit.set(!this.edit());
  }
}
