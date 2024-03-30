import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { SidemenuComponent } from '../../shared/sidemenu/sidemenu.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ListUserPageComponent } from './pages/list-user-page/list-user-page.component';
import { StatisticCardComponent } from './components/statistic-card/statistic-card.component';
import { NgChartsModule } from 'ng2-charts';
import { StatiticsGraphicBarComponent } from './components/statitics-graphic-bar/statitics-graphic-bar.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardPageComponent,
    ListUserPageComponent,
    StatisticCardComponent,
    StatiticsGraphicBarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidemenuComponent,
    NgChartsModule,
  ]
})
export class DashboardModule { }
