import { AfterViewInit, Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  ngAfterViewInit() {
    // Ensure that the Commento script is loaded and initialized
    const commentoScript = this.renderer.createElement('script');
    commentoScript.src = 'http://localhost:8080/js/commento.js';
    this.renderer.setAttribute(commentoScript, 'defer', 'true');
    this.renderer.appendChild(this.el.nativeElement, commentoScript);
  }

  ngOnInit(): void {
  }

}
