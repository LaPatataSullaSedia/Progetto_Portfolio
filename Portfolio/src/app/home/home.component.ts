import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('fullDiv') fullDiv!: ElementRef;

  ngAfterViewInit(): void {
    this.setFullHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.setFullHeight();
  }

  setFullHeight() {
    const windowHeight = window.innerHeight;
    this.fullDiv.nativeElement.style.height = `${windowHeight}px`;
  }
}

