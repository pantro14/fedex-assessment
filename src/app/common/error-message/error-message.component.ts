import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-center pb-8">
      <div role="alert">
        <div class="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <ng-content select="[message]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ErrorMessageComponent {
}
