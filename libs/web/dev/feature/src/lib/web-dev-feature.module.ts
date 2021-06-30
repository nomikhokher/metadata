import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiMainPageModule } from '@schema-driven/web/ui/main-page'
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
          {
            path: 'dashboard',
            loadChildren: () => import('./dev-dashboard/dev-dashboard.module').then((m) => m.DevDashboardModule),
          },
          { path: 'code', loadChildren: () => import('./dev-code/dev-code.module').then((m) => m.DevCodeModule) },
          { path: 'forms', loadChildren: () => import('./dev-forms/dev-forms.module').then((m) => m.DevFormsModule) },
          {
            path: 'color-picker',
            loadChildren: () =>
              import('./dev-color-picker/dev-color-picker.module').then((m) => m.DevColorPickerModule),
          },
          {
            path: 'text-area',
            loadChildren: () => import('./dev-textarea/dev-textarea.module').then((m) => m.DevTextareaModule),
          },
          {
            path: 'select-menus',
            loadChildren: () => import('./dev-select/dev-select.module').then((m) => m.DevSelectModule),
          },
          {
            path: 'radio-group',
            loadChildren: () => import('./dev-radio-group/dev-radio-group.module').then((m) => m.DevRadioGroupModule),
          },
          {
            path: 'checkbox',
            loadChildren: () => import('./dev-checkbox/dev-checkbox.module').then((m) => m.DevCheckboxModule),
          },
          {
            path: 'repeat',
            loadChildren: () => import('./dev-repeat/dev-repeat.module').then((m) => m.DevRepeatModule),
          },
          {
            path: 'multi-checkbox',
            loadChildren: () =>
              import('./dev-multi-checkbox/dev-multi-checkbox.module').then((m) => m.DevMultiCheckboxModule),
          },
          { path: 'json', loadChildren: () => import('./dev-json/dev-json.module').then((m) => m.DevJsonModule) },
          {
            path: 'layout',
            loadChildren: () => import('./dev-layout/dev-layout.module').then((m) => m.DevLayoutModule),
          },
          {
            path: 'sign-in-and-registration',
            loadChildren: () =>
              import('./dev-sign-in-and-registration/dev-sign-in-and-registration.module').then(
                (m) => m.DevSignInAndRegistrationModule,
              ),
          },
          {
            path: 'containers',
            loadChildren: () => import('./dev-container/dev-container.module').then((m) => m.DevContainerModule),
          },
          {
            path: 'tree',
            loadChildren: () => import('./dev-tree/dev-tree.module').then((m) => m.DevTreeModule),
          },
          {
            path: 'dividers',
            loadChildren: () => import('./dev-divider/dev-divider.module').then((m) => m.DevDividerModule),
          },
          {
            path: 'media-objects',
            loadChildren: () =>
              import('./dev-media-object/dev-media-object.module').then((m) => m.DevMediaObjectModule),
          },
          {
            path: 'list-containers',
            loadChildren: () =>
              import('./dev-list-container/dev-list-container.module').then((m) => m.DevListContainerModule),
          },
          { path: 'table', loadChildren: () => import('./dev-table/dev-table.module').then((m) => m.DevTableModule) },
          { path: 'toasts', loadChildren: () => import('./dev-toast/dev-toast.module').then((m) => m.DevToastModule) },
          { path: 'tabs', loadChildren: () => import('./dev-tab/dev-tab.module').then((m) => m.DevTabModule) },
          {
            path: 'breadcrumbs',
            loadChildren: () => import('./dev-breadcrumbs/dev-breadcrumbs.module').then((m) => m.DevBreadcrumbsModule),
          },
          { path: 'alerts', loadChildren: () => import('./dev-alert/dev-alert.module').then((m) => m.DevAlertModule) },
          {
            path: 'dropdown',
            loadChildren: () => import('./dev-dropdown/dev-dropdown.module').then((m) => m.DevDropdownModule),
          },
          {
            path: 'badges',
            loadChildren: () => import('./dev-badge/dev-badge.module').then((m) => m.DevBadgeModule),
          },
          {
            path: 'avatars',
            loadChildren: () => import('./dev-avatar/dev-avatar.module').then((m) => m.DevAvatarModule),
          },
          { path: 'feeds', loadChildren: () => import('./dev-feed/dev-feed.module').then((m) => m.DevFeedModule) },
          { path: 'steps', loadChildren: () => import('./dev-step/dev-step.module').then((m) => m.DevStepModule) },
          {
            path: 'lists',
            loadChildren: () =>
              import('./dev-stacked-lists/dev-stacked-lists.module').then((m) => m.DevStackedListsModule),
          },
          {
            path: 'buttons',
            loadChildren: () => import('./dev-button/dev-button.module').then((m) => m.DevButtonModule),
          },
          {
            path: 'range-slider',
            loadChildren: () =>
              import('./dev-range-slider/dev-range-slider.module').then((m) => m.DevRangeSliderModule),
          },
          {
            path: 'chips',
            loadChildren: () => import('./dev-chips/dev-chips.module').then((m) => m.DevChipsModule),
          },
          {
            path: 'progress-bar',
            loadChildren: () =>
              import('./dev-progress-bar/dev-progress-bar.module').then((m) => m.DevProgressBarModule),
          },
          {
            path: 'toggle-switch-button',
            loadChildren: () =>
              import('./dev-toggle-switch-button/dev-toggle-switch-button.module').then(
                (m) => m.DevToggleSwitchButtonModule,
              ),
          },
          {
            path: 'modals',
            loadChildren: () => import('./dev-modal/dev-modal.module').then((m) => m.DevModalModule),
          },
          {
            path: 'notifications',
            loadChildren: () =>
              import('./dev-notification/dev-notification.module').then((m) => m.DevNotificationModule),
          },
          {
            path: 'slideovers',
            loadChildren: () => import('./dev-slide-over/dev-slide-over.module').then((m) => m.DevSlideOverModule),
          },
          {
            path: 'page-headings',
            loadChildren: () =>
              import('./dev-page-headings/dev-page-headings.module').then((m) => m.DevPageHeadingsModule),
          },
          {
            path: 'card-headings',
            loadChildren: () =>
              import('./dev-card-heading/dev-card-heading.module').then((m) => m.DevCardHeadingModule),
          },
          {
            path: 'table-lists',
            loadChildren: () => import('./dev-table-lists/dev-table-lists.module').then((m) => m.DevTableListsModule),
          },
          {
            path: 'contact-card',
            loadChildren: () =>
              import('./dev-contact-card/dev-contact-card.module').then((m) => m.DevContactCardModule),
          },
          {
            path: 'section-headings',
            loadChildren: () =>
              import('./dev-section-headings/dev-section-headings.module').then((m) => m.DevSectionHeadingsModule),
          },
          { path: 'stats', loadChildren: () => import('./dev-stats/dev-stats.module').then((m) => m.DevStatsModule) },
          {
            path: 'description-list',
            loadChildren: () =>
              import('./dev-description-list/dev-description-list.module').then((m) => m.DevDescriptionListModule),
          },
          {
            path: 'full-calendars',
            loadChildren: () =>
              import('./dev-full-calendar/dev-full-calendar.module').then((m) => m.DevFullCalendarModule),
          },
          {
            path: 'vertical-nav',
            loadChildren: () =>
              import('./vertical-navigation/vertical-navigation.module').then((m) => m.VerticalNavigationModule),
          },
          {
            path: 'paginations',
            loadChildren: () => import('./dev-pagination/dev-pagination.module').then((m) => m.DevPaginationModule),
          },
          { path: 'navbars', loadChildren: () => import('./navbars/navbars.module').then((m) => m.NavbarsModule) },
        ],
      },
    ]),
    WebUiMainPageModule,
  ],
})
export class WebDevFeatureModule {}
