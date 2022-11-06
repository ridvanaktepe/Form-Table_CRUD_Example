import { Component } from '@angular/core';
import { DbServiceService } from './service/db-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DbServiceService]
})
export class AppComponent {
  title = 'front';
}
