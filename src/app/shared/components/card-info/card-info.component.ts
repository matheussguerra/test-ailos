import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';

  iconString: string = '';

  constructor() {}

  ngOnInit(): void {
    this.iconString = `assets/icons/${this.icon}.svg`;
  }
}
