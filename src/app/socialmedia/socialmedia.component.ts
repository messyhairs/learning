﻿import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';
import { CeiboShare } from 'ng2-social-share';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
})

export class SocialmediaComponent {
  public repoUrl = 'https://github.com/Epotignano/ng2-social-share';
  public imageUrl = 'https://avatars2.githubusercontent.com/u/10674541?v=3&s=200';
  
  constructor()
  {

  }
  
}
