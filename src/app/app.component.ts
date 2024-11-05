import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <nav>
    <!-- <a routerLink="/dynamic-table">dynamic table</a><br/> -->
  <a routerLink="/table-dialog-demo">Table-Dialog Demo</a><br/>
  <a routerLink="/testing">testing</a></nav>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-components';
}
