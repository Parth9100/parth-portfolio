import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Calendar, MapPin, Briefcase } from 'lucide-angular';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly CalendarIcon = Calendar;
  readonly MapIcon = MapPin;
  readonly BriefcaseIcon = Briefcase;

  experiences = [
    {
      company: 'AR/VR Navigation',
      role: '3d Artist',
      location: 'Vadodara, India',
      duration: '03/2025 — Present',
      description: 'Developing high-quality 3D assets for AR/VR applications, focusing on optimization and visual fidelity.',
      highlights: [
        'Optimized low-poly geometry and hard-surface environmental props to ensure high-performance real-time rendering in VR environments.',
        'Executed precise UV mapping and layout for architectural assets to support high-quality image textures and procedural materials.',
        'Applied stylized lighting and shader creation to achieve a cohesive visual aesthetic across the virtual campus.',
        'Collaborated with developers to ensure 3D production pipelines met technical requirements from initial concept to final render.'
      ]
    },
    {
      company: 'Tech Expo, Parul University',
      role: 'AR/VR Project Exhibitor',
      location: 'Vadodara, India',
      duration: '2025',
      description: 'Showcased an Augmented and Virtual Reality navigation application to an audience of faculty, industry professionals, and fellow students at a university-level technology exhibition.',
      highlights: [
        'Created and optimized all 3D assets for the AR/VR environment, ensuring models were lightweight and performance-ready for real-time rendering',
        'Executed precise UV mapping across all models to achieve clean, stretch-free textures suited for immersive AR/VR display',
        'Applied polygon optimization and retopology techniques to maintain visual fidelity while meeting the performance constraints of AR/VR hardware'
      ]
    }
  ];
}
