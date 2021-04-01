import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiSidebarPageModule } from '@schema-driven/web/ui/sidebar-page'
import { WebDevFeatureComponent } from './web-dev-feature.component'

@NgModule({
  declarations: [WebDevFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebDevFeatureComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
          {
            path: 'dashboard',
            loadChildren: () => import('./dev-dashboard/dev-dashboard.module').then((m) => m.DevDashboardModule),
          },
          { path: 'code', loadChildren: () => import('./dev-code/dev-code.module').then((m) => m.DevCodeModule) },
          { path: 'forms', loadChildren: () => import('./dev-forms/dev-forms.module').then((m) => m.DevFormsModule) },
          { path: 'json', loadChildren: () => import('./dev-json/dev-json.module').then((m) => m.DevJsonModule) },
          {
            path: 'layout',
            loadChildren: () => import('./dev-layout/dev-layout.module').then((m) => m.DevLayoutModule),
          },
          { path: 'table', loadChildren: () => import('./dev-table/dev-table.module').then((m) => m.DevTableModule) },
          { path: 'toasts', loadChildren: () => import('./dev-toast/dev-toast.module').then((m) => m.DevToastModule) },
          { path: 'tabs', loadChildren: () => import('./dev-tab/dev-tab.module').then((m) => m.DevTabModule) },
        ],
      },
    ]),
    WebUiSidebarPageModule,
  ],
})
export class WebDevFeatureModule {}
