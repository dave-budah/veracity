import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [
    RouterLink,
    MatLabel,
    MatFormField,
    MatButton,
    MatInput
  ],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.css'
})
export class MessageFormComponent {

}
