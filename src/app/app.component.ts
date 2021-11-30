import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span>Hello from AppComponent <br></span><router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  title = 'lazy-loading-angular-demo';
}
