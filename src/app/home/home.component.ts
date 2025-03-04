import { Component } from '@angular/core';
import { TuiButton, TuiIcon, TuiOption, TuiGroup } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiButtonGroup, TuiIconBadge } from '@taiga-ui/kit';
@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    TuiButton,
    TuiAvatar,
    TuiIcon,
    TuiOption,
    TuiGroup,
    TuiButtonGroup,
    TuiIconBadge,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
