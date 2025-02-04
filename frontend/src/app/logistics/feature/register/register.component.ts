import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {TextBoxComponent} from '../../../shared/ui/text-box/text-box.component';
import { TabsModule } from 'primeng/tabs';
import {Button} from 'primeng/button';
import {Toolbar} from 'primeng/toolbar';

@Component({
  selector: 'app-register',
  imports: [
    TableModule,
    CommonModule,
    TextBoxComponent,
    TabsModule,
    Button,
    Toolbar
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registrations: any[] = [
    {
      id: 1,
      name: 'John Doe',
      dates: [
        {
          arrival: '2021-01-01',
          departure: '2021-01-02'
        },
        {
          arrival: '2021-01-02',
          departure: '2021-01-03'
        }
      ],
      items: [
        {
          name: 'item 1',
          quantity: 1
        },
        {
          name: 'item 2',
          quantity: 2
        }
      ]
    },
    {
      id: 2,
      name: 'Jane Doe',
      dates: [
        {
          arrival: '2021-01-01',
          departure: '2021-01-02'
        },
        {
          arrival: '2021-01-02',
          departure: '2021-01-03'
        }
      ],
      items: [
        {
          name: 'item 1',
          quantity: 1
        },
        {
          name: 'item 2',
          quantity: 2
        }
      ]
    },
    {
      id: 3,
      name: 'John Smith',
      dates: [
        {
          arrival: '2021-01-01',
          departure: '2021-01-02'
        },
        {
          arrival: '2021-01-02',
          departure: '2021-01-03'
        }
      ],
      items: [
        {
          name: 'item 1',
          quantity: 1
        },
        {
          name: 'item 2',
          quantity: 2
        }
      ]
    },
    {
      id: 4,
      name: 'Jane Smith',
      dates: [
        {
          arrival: '2021-01-01',
          departure: '2021-01-02'
        },
        {
          arrival: '2021-01-02',
          departure: '2021-01-03'
        }
      ],
      items: [
        {
          name: 'item 1',
          quantity: 1
        },
        {
          name: 'item 2',
          quantity: 2
        }
        ]
    }
    ]

  editProfile(registration: any) {

  }

  deleteProfile(registration: any) {

  }

  editRegistration(registration: any) {

  }

  createProfile() {

  }

  exportCSV($event: MouseEvent) {

  }
}
