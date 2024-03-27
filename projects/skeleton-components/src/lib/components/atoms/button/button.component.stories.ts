// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
/* eslint-disable @typescript-eslint/consistent-type-imports */

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
