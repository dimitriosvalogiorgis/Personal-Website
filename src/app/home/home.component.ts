import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiButton,
  TuiIcon,
  TuiOption,
  TuiGroup,
  TuiSurface,
} from '@taiga-ui/core';
import { TuiAvatar, TuiButtonGroup, TuiIconBadge } from '@taiga-ui/kit';
import { TuiExpand } from '@taiga-ui/experimental';
import { TuiItem } from '@taiga-ui/cdk';

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
    TuiExpand,
    TuiItem,
    TuiSurface,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  expanded = false;
}
