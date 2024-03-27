// Copyright (c) 2024 Skeleton-components. All Rights Reserved.

import { AssetsModule } from '../../assets/assets.module';
import { AtomsModule } from '../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule, AssetsModule, AtomsModule, MoleculesModule, OrganismsModule, TemplatesModule],
    exports: [],
})
export class PagesModule {}
