import { Component } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { TextBoxComponent } from '../../ui/text-box/text-box.component';
import { PrimeNG } from 'primeng/config';


@Component({
  selector: 'app-page-creation',
  templateUrl: './page-creation.component.html',
  styleUrls: ['./page-creation.component.css'],
  standalone: true,
  imports: [
    EditorModule,
    FormsModule,
    TextBoxComponent
  ]
})
export class PageCreationComponent {

  constructor(
    private primeng: PrimeNG
  ) {}
  text: string | undefined;
}
