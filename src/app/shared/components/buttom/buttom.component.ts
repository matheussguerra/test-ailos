import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss'],
})
export class ButtomComponent implements OnInit {
  constructor() {}

  @Input() class: string = '';
  @Input() disabled: boolean | null | undefined;
  @Input() type: string | undefined = 'button';

  ngOnInit(): void {
    console.log(this.disabled);
    if (this.disabled !== (null || undefined)) {
    }
  }
}
