// Copyright (c) 2024 Skeleton-components. All Rights Reserved.
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TColors, TSizes } from '../../public-api';


@Component({
  selector: 'scs-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  /**
   * The Labeel of the button.
   */
  @Input() label: string | undefined;
  /**
   * The Color of the button, see {@link TColors}.
   */
  @Input({required: true}) color: TColors = 'black';
  /**
   * Possible sizes of the button, see {@link TSizes}.
   */
  @Input({required: true}) size: TSizes = 'regular';

  /**
   * Clicked event handled by the implementing code.
   */
  @Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

  click(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}
