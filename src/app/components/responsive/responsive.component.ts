import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
