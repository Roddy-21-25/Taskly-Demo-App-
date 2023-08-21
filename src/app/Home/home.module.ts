import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BaseBoxComponent } from './Pages/base-box/base-box.component';
import { SharedModule } from '../Shared/shared.module';
import { UserComponent } from './Components/user/user.component';
import { SliderComponent } from './Components/slider/slider.component';
import { CalendarComponent } from './Components/calendar/calendar.component';


@NgModule({
  declarations: [
    BaseBoxComponent,
    UserComponent,
    SliderComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
