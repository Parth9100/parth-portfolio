import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Maximize2, X, Play } from 'lucide-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PROJECTS, Project } from '../../data/projects.data';

interface GalleryItem {
  src: string;
  title: string;
  category: string;
  type: 'image' | 'video';
  videoType?: 'regular' | 'shorts';
  embedUrl?: SafeResourceUrl;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  readonly MaximizeIcon = Maximize2;
  readonly CloseIcon = X;
  readonly PlayIcon = Play;

  galleryItems: GalleryItem[] = [];
  selectedItem: GalleryItem | null = null;

  constructor(private sanitizer: DomSanitizer) {
    this.galleryItems = this.buildGalleryItems();
  }

  private buildGalleryItems(): GalleryItem[] {
    const items: GalleryItem[] = [];

    for (const project of PROJECTS) {
      // Add the video first (featured position)
      if (project.videoId) {
        items.push({
          src: project.images[0]?.src || '',
          title: project.title + ' — Animation',
          category: project.category,
          type: 'video',
          videoType: project.videoType || 'regular',
          embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${project.videoId}`
          )
        });
      }

      // Add all images
      for (const img of project.images) {
        items.push({
          src: img.src,
          title: img.label,
          category: project.category,
          type: 'image'
        });
      }
    }

    return items;
  }

  openLightbox(item: GalleryItem) {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedItem = null;
    document.body.style.overflow = 'auto';
  }
}
