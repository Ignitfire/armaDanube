// frontend/src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { MenubarModule } from 'primeng/menubar';
import { DropdownComponent, DropdownItem } from './core/ui/dropdown/dropdown.component';
import { PageService } from './pages/data-access/page.service';
import { pageNameToRouteAndTitle } from './core/utils/dataToText';
import { MessageService } from 'primeng/api';
import {Toast} from 'primeng/toast';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MenubarModule, DropdownComponent, Toast, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'frontend';
  buttonStyle = '  color: white;\n' +
    '  text-decoration: none;\n' +
    '  margin: 0 30px;\n' +
    '  padding: 15px;\n' +
    '  font-size: 1.2rem;';

  dropdownPages: DropdownItem[] = [];
  dropdownRegistering: DropdownItem[] = [
    { label: 'Inscription', route: '/register' },
    { label: 'Matériel', route: '/inventory' },
    { label: 'Planning', route: '/planning' },
  ];

  AddPageItem = { label: 'Ajouter une Page +', route: '/createPage' };

  constructor(
    private primeng: PrimeNG,
    private pageService: PageService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log("in OnInit")
    this.pageService.getPageNames().subscribe(response => {
      this.dropdownPages = response.map((item: { name: string; }) => pageNameToRouteAndTitle(item.name));
    });
  }

  refreshPageList() {
    console.log('Refreshing page list');
    this.pageService.getPageNames().subscribe(response => {
      this.dropdownPages = response.map((item: { name: string; }) => pageNameToRouteAndTitle(item.name));
      //TODO : cette manière de faire permet d'avoir le bouton de création de page de manière permanente mais il faudrait trncher entre la méthode dans dropDwon avec enableCreation et cette méthode ci plus brute.
      this.dropdownPages.push(this.AddPageItem);
    });
  }
}
