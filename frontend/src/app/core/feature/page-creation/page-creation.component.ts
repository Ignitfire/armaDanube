import {Component, OnInit} from '@angular/core';
import { EditorModule } from 'primeng/editor';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextBoxComponent } from '../../ui/text-box/text-box.component';
import {PageService} from '../../data-access/page.service';
import {AppComponent} from '../../../app.component';


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

  constructor(
    private pageService: PageService,
    private appComponent: AppComponent
  ) {
    console.log('Constructor: PageService is', this.pageService);
  }

  formGroup!: FormGroup;

  ngOnInit() {
    console.log('ngOnInit: PageService is', this.pageService);
    this.formGroup = new FormGroup({
      html: new FormControl(),
      title: new FormControl()
    });
  }

  onSubmit() {
    console.log('Form submitted');
    this.pageService.createPage(this.formGroup.value.title, this.formGroup.value.html).subscribe(response => {
      console.log(response);
    });
    this.appComponent.refreshPageList(); // Call method to refresh the list
  }
}
