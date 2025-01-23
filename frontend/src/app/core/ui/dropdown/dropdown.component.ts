// dropdown.component.ts
import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NgClass, NgForOf, NgStyle} from '@angular/common';

interface DropdownItem {
  label: string;
  route?: string;
  action?: () => void;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  imports: [
    NgForOf,
    NgStyle
  ],
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{
  @Input() items: DropdownItem[] = [];
  @Input() label = '';
  @Input() enableCreation: boolean = false;
  @Input() divStyle: string | undefined;
  @Input() buttonStyle: string | undefined;
  @Input() menuStyle: string | undefined;
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
