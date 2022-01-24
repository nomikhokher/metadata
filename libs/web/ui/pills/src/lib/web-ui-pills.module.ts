import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiPillsComponent } from './web-ui-pills.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiPillsComponent],
  exports: [WebUiPillsComponent],
})
export class WebUiPillsModule {}
