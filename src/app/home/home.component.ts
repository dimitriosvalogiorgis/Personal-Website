import { Component } from '@angular/core';
import { TuiButton, TuiIcon, TuiOption } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [TuiButton, TuiAvatar, TuiIcon, TuiOption],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
