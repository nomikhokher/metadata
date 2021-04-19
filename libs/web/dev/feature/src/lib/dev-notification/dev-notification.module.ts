import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevNotificationComponent } from './dev-notification.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'

@NgModule({
  declarations: [DevNotificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevNotificationComponent }]),
    WebUiPreviewModule,
    WebUiNotificationModule,
    WebUiNotificationImageModule,
  ],
})
export class DevNotificationModule {}
