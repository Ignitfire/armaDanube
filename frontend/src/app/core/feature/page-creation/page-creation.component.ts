import {Component, OnInit} from '@angular/core';
import { EditorModule } from 'primeng/editor';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    TextBoxComponent,
    ReactiveFormsModule
  ]
})
export class PageCreationComponent implements OnInit {

  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl()
    });
  }

  onSubmit() {
    console.log('Form submitted');
    const editorContent = this.formGroup.get('text')?.value;
    console.log(this.formGroup.value);
  }
}
