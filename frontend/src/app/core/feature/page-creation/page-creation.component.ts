import {Component, OnInit} from '@angular/core';
import { EditorModule } from 'primeng/editor';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextBoxComponent } from '../../ui/text-box/text-box.component';
import {PageService} from '../../data-access/page.service';
import {AppComponent} from '../../../app.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Button} from 'primeng/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-page-creation',
  templateUrl: './page-creation.component.html',
  styleUrls: ['./page-creation.component.css'],
  standalone: true,
  imports: [
    EditorModule,
    FormsModule,
    TextBoxComponent,
    ReactiveFormsModule,
    Button,
    NgIf
  ]
})
export class PageCreationComponent implements OnInit {

  formGroup!: FormGroup;
  isEditMode: boolean = false;
  pageName: string = '';


  constructor(
    private pageService: PageService,
    private appComponent: AppComponent,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      html: new FormControl(),
      name: new FormControl()
    });

    this.route.params.subscribe(params => {
      if (params['name']) {
        this.isEditMode = true;
        this.pageName = params['name'];
        this.pageService.getPage(this.pageName).subscribe(response => {
          this.formGroup.patchValue({
            html: response.html,
            name: response.name
          });
        });
      } else {
        this.isEditMode = false;
        this.pageName = '';
        this.formGroup.reset();
      }
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.pageService.updatePage(this.pageName, this.formGroup.value.name, this.formGroup.value.html).subscribe(response => {
        this.router.navigate(['/page/' + this.formGroup.value.name]);
        this.appComponent.refreshPageList();
      });
    } else {
      this.pageService.createPage(this.formGroup.value.name, this.formGroup.value.html).subscribe(response => {
        this.router.navigate(['/page/' + this.formGroup.value.name]);
        this.appComponent.refreshPageList();
      });
    }
  }
}
