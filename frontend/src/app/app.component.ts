import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { MenubarModule } from 'primeng/menubar';
import {DropdownComponent} from './core/ui/dropdown/dropdown.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MenubarModule, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'frontend';
  buttonStyle = '  color: white;\n' +
    '  text-decoration: none;\n' +
    '  margin: 0 30px;\n' +
    '  padding: 15px;\n' +
    '  font-size: 1.2rem;';

  dropdownItems = [
    {label: 'Home', route: '/home'},
    {label: 'About', route: '/about'},
    {label: 'Contact', route: '/contact'},
    {label: 'Services', route: '/services'},
    ];

  constructor(
    private primeng: PrimeNG
  ) {}
}
