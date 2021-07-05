import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
