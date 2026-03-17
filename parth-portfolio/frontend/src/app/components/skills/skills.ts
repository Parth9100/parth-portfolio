import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories = [
    {
      name: '3D & Motion',
      skills: [
        { name: 'Blender', level: 95 },
        { name: 'Motion Design', level: 85 },
        { name: 'Hard Surface Modeling', level: 90 },
        { name: 'ZBrush (Sculpting)', level: 75 }
      ]
    },
    {
      name: 'Technical Skills',
      skills: [
        { name: 'Retopology', level: 90 },
        { name: 'UV Unwrapping', level: 85 },
        { name: 'Texturing (Substance)', level: 80 },
        { name: 'PBR Workflow', level: 88 }
      ]
    }
  ];
}
