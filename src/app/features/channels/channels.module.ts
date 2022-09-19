import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteButtonComponent } from './invite-button/invite-button.component';
import { NewChannelComponent } from './new-channel/new-channel.component';


@NgModule({
  declarations: [
    InviteButtonComponent,
    NewChannelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChannelsModule { }
