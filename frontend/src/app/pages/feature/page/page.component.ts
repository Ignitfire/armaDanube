// frontend/src/app/core/feature/page/page.component.ts
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../data-access/page.service';
import { TextBoxComponent } from '../../../shared/ui/text-box/text-box.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';
import {AppComponent} from '../../../app.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  imports: [
    TextBoxComponent,
    ToastModule,
    ConfirmDialogModule,
    CommonModule,
    Button
  ],
  styleUrls: ['./page.component.css'],
  providers: [ConfirmationService]
})
export class PageComponent implements OnInit {
  htmlContent: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private appComponent: AppComponent,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const pageName = params['name'];
      this.pageService.getPage(pageName).subscribe(response => {
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(response.html);
        this.cdr.detectChanges(); // Trigger change detection
        console.log('Page content:', this.htmlContent);
      });
    });
  }

  deletePage() {
    this.confirmationService.confirm({
      message: 'Etes-vous sur de vouloir supprimer cette page?',
      header: 'Confirmation',
      closable: true,
      closeOnEscape: true,
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Annuler',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Supprimer',
        severity: 'danger',
      },
      accept: () => {
        this.pageService.deletePage(this.route.snapshot.params['name']).subscribe(() => {
          this.appComponent.refreshPageList(); // Call method to refresh the list
          this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Page supprimé avec succès' });
          this.router.navigate(['/home']);
        });
      }
    });
  }

  editPage() {
    const pageName = this.route.snapshot.params['name'];
    this.router.navigate(['/createPage', { name: pageName }]);
  }
}
