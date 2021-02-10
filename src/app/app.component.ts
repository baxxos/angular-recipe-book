import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activePath = 'recipes';
  title = 'recipe-book';

  onNavigation(path: string) {
    this.activePath = path;
  }
}
