import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <div class="wrapper">
        Hello Ultimate Angular!
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  constructor() {}
}
