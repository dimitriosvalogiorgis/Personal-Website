import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiCarousel } from '@taiga-ui/kit';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [TuiCarousel],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  index = 0;
  readonly voting = ['1.png', '2.png', '3.png'];
  musicIndex = 0;
  readonly music = ['1.png', '2.png', '3.png', '4.png', '5.png'];
  azxIndex = 0;
  readonly azx = ['1.png', '2.png', '3.png', '4.png'];
}
