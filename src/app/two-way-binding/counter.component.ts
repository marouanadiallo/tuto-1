import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <button (click)="updateCount(-1)"> - decrementer</button>
    <span class="d-inblock">{{ count }}</span>
    <button (click)="updateCount(+1)">+ incrementer</button>
  `,
  styles: [`
    .d-inblock {
      display: inline-block;
      margin-left: 16px;
      margin-right: 16px;
    }
  `]
})
export class CounterComponent {
    
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
  }
}