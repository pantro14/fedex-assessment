import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-center pb-8">
      <div role="alert">
        <div class="border border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
          <ng-content select="[message]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SuccessMessageComponent {

}
