import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { IComments } from '../interface/IComments';
import { IPageParams } from '../interface/IPageParams';
import { BaseRepository } from '../repository/BaseRepository';
import { ThemePalette } from '@angular/material/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [BaseRepository]
})
export class HomePageComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    // Ensure that the Commento script is loaded and initialized
    const commentoScript = this.renderer.createElement('script');
    commentoScript.src = 'http://localhost:8080/js/commento.js';
    this.renderer.setAttribute(commentoScript, 'defer', 'true');
    this.renderer.appendChild(this.el.nativeElement, commentoScript);
  }







}
