import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {TableModule} from 'primeng/table';
import {TextBoxComponent} from '../../../shared/ui/text-box/text-box.component';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-inventory',
  imports: [
    NgForOf,
    TableModule,
    TextBoxComponent,
    Button
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  items: any[] = [
    {
      name: 'item 1',
      quantity: 1
    },
    {
      name: 'item 2',
      quantity: 2
    }
  ];


  editItem(item: any) {

  }

  deleteItem(item: any) {

  }

  editContribution(item: any) {

  }
}
