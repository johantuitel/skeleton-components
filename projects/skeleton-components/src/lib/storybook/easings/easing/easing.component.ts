import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'scs-easing',
  templateUrl: './easing.component.html',
  styleUrl: './easing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EasingComponent {
  /**
   * Category of the easing.
   */
  @Input({ required: true }) category!: string;

  /**
   * Name of the easing.
   */
  @Input({ required: true }) name!: string;
}
