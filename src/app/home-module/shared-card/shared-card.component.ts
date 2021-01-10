import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent implements OnInit {
  @Input() imgIconSource = '';
  @Input() cardHeader = '';
  @Input() cardDesc = '';

  constructor() { }

  ngOnInit(): void {
  }

}
