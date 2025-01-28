import { Component } from '@angular/core';
import {TextBoxComponent} from '../../../shared/ui/text-box/text-box.component';
import {CardComponent} from '../../ui/card/card.component';

@Component({
  selector: 'app-contact',
  imports: [
    TextBoxComponent,
    CardComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
