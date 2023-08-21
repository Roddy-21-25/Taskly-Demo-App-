import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { SocialMediaButtonsComponent } from './social-media-buttons/social-media-buttons.component';

@NgModule({
  declarations: [
    SocialMediaButtonsComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ],
  exports:[
    SocialMediaButtonsComponent
  ]
})
export class ButtonsModule { }
