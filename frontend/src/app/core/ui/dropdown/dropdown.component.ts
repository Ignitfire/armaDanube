// dropdown.component.ts
import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {NgClass, NgForOf} from '@angular/common';

export interface DropdownItem {
  label: string;
  route?: string;
  action?: () => void;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  imports: [
    NgForOf,
    NgClass
  ],
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit{
  @Input() label! : string;
  @Input() items! : DropdownItem[];
  @Input() dropdownClass: string | undefined;
  @Input() buttonClass: string | undefined;
  @Input() menuClass: string | undefined;
  @Input() enableCreation: boolean = false ;
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.enableCreation) {
      this.items.push({
        label: '+ Ajouter une page',
        route: '/createPage'
      });
    }
  }

  onButtonClick(item: DropdownItem) {
    if (item.route) {
      this.router.navigate([item.route]);
    } else if (item.action) {
      item.action();
    }
  }
}
