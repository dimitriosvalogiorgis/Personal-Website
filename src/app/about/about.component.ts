import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutItems = [
    {
      title: 'Skills',
      listItems: [
        'Experienced with HTML, CSS, C++, PHP, Java, SQL',
        'Proficient at JavaScript Angular, C# Windows Forms',
        'Fluent English & Greek',
        'Completed military obligations',
      ],
    },
    {
      title: 'Education',
      listItems: [
        'Bachelor in Computing - Application Development',
        'First class Bachelor of Science with Honors in Computing (Application Development)',
        'Undergraduate Dissertation topic: “Developing a record store inventory management application with a product and client database”',
      ],
    },
    {
      title: 'Work Experience',
      listItems: [
        'Production Manager and Staff Manager for Hellenic Smoothies 2017-January 2025',
      ],
    },
  ];
}
