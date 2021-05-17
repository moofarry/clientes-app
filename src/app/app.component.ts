import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Bienvenido a Angular';

  curso: string = 'Curso spring con agunlar 7';
  profesor: string = 'Jhon Fredy Moofarry';
}
