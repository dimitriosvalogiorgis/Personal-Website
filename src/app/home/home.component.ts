import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
@Component({
  standalone: true,
  selector: 'app-home',
  imports: [TuiButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
