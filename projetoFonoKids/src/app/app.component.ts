import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import {AppModule} from './app.module'
// import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projetoFonoKids';
}
