import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  leftSkills = [
    { name: 'C#', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'SQL', level: 90 },
    { name: 'PostgreSQL', level: 80 }
  ];

  rightSkills = [
    { name: '.NET Core / ASP.NET MVC', level: 95 },
    { name: 'Entity Framework Core / LINQ', level: 90 },
    { name: 'Dapper', level: 80 },
    { name: 'Angular / Angular Material', level: 85 },
    { name: 'Microservices Architecture', level: 80 }
  ];
}
