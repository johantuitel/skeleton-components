// Copyright (c) 2024 Skeleton-components. All Rights Reserved.

import { Meta, StoryObj } from '@storybook/angular';

import { AssetsModule } from '../../../assets/assets.module';
import { AtomsModule } from '../atoms.module';
import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [AssetsModule, AtomsModule]
    })
  ]
} as Meta<ButtonComponent>;

type TButtonTemplate = StoryObj<ButtonComponent>;

export const primary: TButtonTemplate = {
  args: {
    label: 'Primary Button',
    size: 'regular'
  }
}

export const secondary: TButtonTemplate = {
  args: {
    label: 'Primary Button',
    color: 'secondary',
    size: 'regular'
  }
}
