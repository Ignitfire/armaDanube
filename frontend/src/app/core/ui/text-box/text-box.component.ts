import { Component, Input } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-text-box',
  imports: [
    NgStyle
  ],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css'
})
export class TextBoxComponent {
  @Input() width: string | undefined;
  @Input() height: string | undefined;
  @Input() minWidth: string | undefined;
  @Input() minHeight: string | undefined;
  @Input() maxWidth: string | undefined;
  @Input() maxHeight: string | undefined;
}
