import { Component } from '@angular/core';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {TableModule} from 'primeng/table';
import {TextBoxComponent} from '../../../shared/ui/text-box/text-box.component';

@Component({
  selector: 'app-planning',
  imports: [
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    TableModule,
    Tabs,
    TextBoxComponent
  ],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.css'
})
export class PlanningComponent {

}
