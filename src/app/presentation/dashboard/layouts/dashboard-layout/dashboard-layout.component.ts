import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import { SidebarComponent } from '../../components/shared/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/shared/header/header.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterModule, SidebarComponent, CommonModule, HeaderComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DashboardLayoutComponent {

}
