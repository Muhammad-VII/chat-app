import { ChatPageComponent } from './chat-page/chat-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsModule } from '../channels/channels.module';
import { ChatRoutingModule } from './chat-routing.module';
import { TranslateModule } from '@ngx-translate/core';
// StreamChatModule,
// StreamAutocompleteTextareaModule,

@NgModule({
  declarations: [ChatPageComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    TranslateModule.forChild(),
    ChannelsModule,
  ],
})
export class ChatModule {}
