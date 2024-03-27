// Copyright (c) 2024 Skeleton-components. All Rights Reserved.
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TColors, TSizes } from '@scs/types';


@Component({
  selector: 'brazukka-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  @Input() label: string | undefined;
  @Input({required: true}) color: TColors = 'black';
  @Input({required: true}) size: TSizes = 'regular';

  @Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

  click(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}
