// frontend/src/app/core/feature/page/page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../data-access/page.service';
import { TextBoxComponent } from '../../ui/text-box/text-box.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  imports: [
    TextBoxComponent,
    ToastModule,
    ConfirmDialogModule,
    CommonModule
  ],
  styleUrls: ['./page.component.css'],
  providers: [ConfirmationService]
})
export class PageComponent implements OnInit {
  htmlContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const pageName = params['name'];
      this.pageService.getPage(pageName).subscribe(response => {
        this.htmlContent = response.html;
      });
    });
  }

  deletePage() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this page?',
      accept: () => {
        this.pageService.deletePage(this.route.snapshot.params['name']).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Page deleted successfully' });
          // this.router.navigate(['/home']);
        });
      }
    });
  }
}
