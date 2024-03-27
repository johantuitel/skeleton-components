// Copyright (c) 2024 Skeleton-components. All Rights Reserved.
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface IColor {
  color: string;
  function: string;
  scssVariable: string;
  cssVariable: string;
}

@Component({
  selector: 'scs-color-item',
  templateUrl: './color-item.component.html',
  styleUrl: './color-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorItemComponent {
  /**
   * The title of the Color item.
   */
  @Input({required: true}) title!: string;
  @Input({required: false}) subtitle: string | undefined;
  @Input({required: true}) colors: Array<IColor> = [];
}
