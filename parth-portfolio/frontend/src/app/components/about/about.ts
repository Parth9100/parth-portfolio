import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, User, Code2, Palette, Globe } from 'lucide-angular';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('aboutImage') aboutImage!: ElementRef;
  @ViewChild('aboutContent') aboutContent!: ElementRef;
  @ViewChild('badge') badge!: ElementRef;

  readonly UserIcon = User;
  readonly CodeIcon = Code2;
  readonly PaletteIcon = Palette;
  readonly GlobeIcon = Globe;

  features = [
    {
      icon: this.PaletteIcon,
      title: '3D Artist',
      description: 'Specializing in Stylized Environments and Hard Surface Modeling.'
    },
    {
      icon: this.CodeIcon,
      title: 'Motion Design',
      description: 'Creating smooth, engaging animations using Blender and After Effects.'
    },
    {
      icon: this.GlobeIcon,
      title: 'AR/VR Navigation',
      description: 'Optimizing low-poly geometry and hard-surface environmental props for VR.'
    }
  ];

  ngAfterViewInit() {
    this.initAnimations();
  }

  private initAnimations() {
    const section = this.aboutSection.nativeElement;
    const image = this.aboutImage.nativeElement;
    const content = this.aboutContent.nativeElement;
    const badge = this.badge.nativeElement;

    // Entrance Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(image,
      { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.2 },
      { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.5, ease: 'power4.out' }
    )
      .from(content.querySelectorAll('.section-tag, .section-title, .about-text, .feature-card'), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      }, '-=1');

    // Hover-like floating badge
    gsap.to(badge, {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Subtle image parallax
    gsap.to(image.querySelector('.image-placeholder'), {
      y: -20,
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  }
}
