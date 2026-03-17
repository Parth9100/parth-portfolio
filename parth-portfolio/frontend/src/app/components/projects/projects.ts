import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, Eye } from 'lucide-angular';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly ExternalLinkIcon = ExternalLink;
  readonly GithubIcon = Github;
  readonly EyeIcon = Eye;

  projectsArray = PROJECTS;
}
