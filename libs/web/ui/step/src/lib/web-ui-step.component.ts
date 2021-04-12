import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-step',
  template: `
    <nav aria-label="Progress">
      <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
        <li class="md:flex-1">
          <!-- Completed Step -->
          <a
            href="#"
            class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          >
            <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800"
              >Step 1</span
            >
            <span class="text-sm font-medium">Job details</span>
          </a>
        </li>

        <li class="md:flex-1">
          <!-- Current Step -->
          <a
            href="#"
            class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            aria-current="step"
          >
            <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase">Step 2</span>
            <span class="text-sm font-medium">Application form</span>
          </a>
        </li>

        <li class="md:flex-1">
          <!-- Upcoming Step -->
          <a
            href="#"
            class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          >
            <span class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700"
              >Step 3</span
            >
            <span class="text-sm font-medium">Preview</span>
          </a>
        </li>
      </ol>
    </nav>
  `,
})
export class WebUiStepComponent {
  @Input() mode?: any

  public name: string = 'ali'
}
